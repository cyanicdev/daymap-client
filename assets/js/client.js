const { getUrlWithAuth, getUrlWithAuthHashed, getUrlWithAuthHashedPromise, getStore } = require('electron').remote.require('./main.js');
const httpntlm = require('httpntlm');
const settings = getStore();

let username = "";
let lm_password = "";
let nt_password = "";
let domain = "";

let down = false;
let lock = false;

function login() {
    if(!lock) {
        lock = true;
        let button = gebi("login-submit");
        button.innerText = "";
        button.style.backgroundColor = "var(--background-active)";
        button.style.pointerEvents = "none";

        let spinner = document.createElement("div");
        spinner.classList.add("spinner-inline");
        button.appendChild(spinner);

        user = gebi("login-username").value;
        pass = gebi("login-password").value;
        dom = gebi("login-domain").value;

        getUrlWithAuth(dom + "student/dayplan.aspx", user, pass, (err, res) => {
            lock = false;

            if(err || res.statusCode != 200) {
                shake(gebi("login-screen").children[0]);
                button.innerText = "Login";
                button.style.backgroundColor = "";
                button.style.pointerEvents = "";
            } else {
                username = user;
                lm_password = httpntlm.ntlm.create_LM_hashed_password(pass);
                nt_password = httpntlm.ntlm.create_NT_hashed_password(pass);
                domain = dom;

                if(gebi("login-remember").checked) {
                    settings.set('username', username);
                    settings.set('lm_password', lm_password);
                    settings.set('nt_password', nt_password);
                    settings.set('domain', domain);
                }

                loginSuccess(res.body);
            }
        });
    }
}

window.onload = function() {
    let spinner = document.createElement("div");
    spinner.classList.add("spinner");
    document.body.appendChild(spinner);

    username = settings.get('username');
    lm_password = settings.get('lm_password');
    nt_password = settings.get('nt_password');
    domain = settings.get('domain');

    if(username && lm_password && nt_password && domain) {
        lm_password = lm_password.data;
        nt_password = nt_password.data;

        getUrlWithAuthHashed(domain + "student/dayplan.aspx", username, lm_password, nt_password, (err, res) => {
            if(!(err || res.statusCode != 200)) {
                loginSuccess(res.body).then(() => sleep(500).then(() => {
                    document.body.removeChild(spinner);
                    gebi("fadein").classList.add("loaded");
                }));
            } else {
                document.body.removeChild(spinner);
                gebi("fadein").classList.add("loaded");
            }
        });
    } else {
        document.body.removeChild(spinner);
        gebi("fadein").classList.add("loaded");
    }
}

async function loginSuccess(dayplanResponse) {
    // Parallel gettering of them webpages
    let timetable = getUrlWithAuthHashedPromise(domain + "timetable/timetable.aspx", username, lm_password, nt_password);
    let assessment = getUrlWithAuthHashedPromise(domain + "student/assessmentsummary.aspx", username, lm_password, nt_password);

    let timetableResponse = await timetable;
    let assessmentResponse = await assessment;

    if(timetableResponse.statusCode == 200) {
        parseTimetable(timetableResponse.body);
    } else {
        console.warn("Error retrieving timetable");
    }

    if (assessmentResponse.statusCode == 200) {
        parseAssessment(assessmentResponse.body);
    } else {
        console.warn("Error retrieving assessments");
    }
    
    changeScreenFade(gebi("feed-screen"));
}

function pressEnter(event) {
    if (event.keyCode === 13) {
        if(down) return;
        down = true;

        login();
    }
}

function releaseEnter(event) {
    if (event.keyCode === 13) {
        down = false;
    }
}
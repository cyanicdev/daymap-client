const { getUrlWithAuth, getUrlWithAuthHashed, getUrlWithAuthHashedPromise, getStore } = require('electron').remote.require('./main.js');
const httpntlm = require('httpntlm');
const settings = getStore();

let username = "";
let lm_password = "";
let nt_password = "";

function login() {
    let button = gebi("login-submit");
    button.innerText = "";
    button.style.backgroundColor = "#7A6B7F";

    let spinner = document.createElement("div");
    spinner.classList.add("spinner");
    button.appendChild(spinner);

    user = gebi("login-username").value;
    pass = gebi("login-password").value;

    getUrlWithAuth("https://daymap.gihs.sa.edu.au/daymap/student/dayplan.aspx", user, pass, (err, res) => {
        if(err || res.statusCode != 200) {
            shake(gebi("login-username"));
            shake(gebi("login-password"));
            shake(gebi("login-username-caption"));
            shake(gebi("login-password-caption"));
            shake(gebi("login-remember"));
            shake(gebi("login-remember-text"));

            button.innerText = "Connect to Daymap";
            button.style.backgroundColor = "";
        }
        else {
            username = user;
            lm_password = httpntlm.ntlm.create_LM_hashed_password(pass);
            nt_password = httpntlm.ntlm.create_NT_hashed_password(pass);

            if(gebi("login-remember").checked) {
                settings.set('username', username);
                settings.set('lm_password', lm_password);
                settings.set('nt_password', nt_password);
            }

            loginSuccess(res.body);
        }
    });
}

window.onload = function() {
    let spinner = document.createElement("div");
    spinner.classList.add("spinner");
    document.body.appendChild(spinner);

    username = settings.get('username');
    lm_password = settings.get('lm_password');
    nt_password = settings.get('nt_password');

    if(username && lm_password && nt_password) {
        lm_password = lm_password.data;
        nt_password = nt_password.data;

        getUrlWithAuthHashed("https://daymap.gihs.sa.edu.au/daymap/student/dayplan.aspx", username, lm_password, nt_password, (err, res) => {
            if(!(err || res.statusCode != 200)) {
                loginSuccess(res.body).then(() => sleep(200).then(() => {
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
    let timetable = getUrlWithAuthHashedPromise("https://daymap.gihs.sa.edu.au/daymap/timetable/timetable.aspx", username, lm_password, nt_password);
    let assessment = getUrlWithAuthHashedPromise("https://daymap.gihs.sa.edu.au/daymap/student/assessmentsummary.aspx", username, lm_password, nt_password);

    let timetableResponse = await timetable;
    let assessmentResponse = await assessment;

    if(timetableResponse.statusCode == 200) {
        parseTimetable(timetableResponse.body);
    } else {
        console.log("Error retrieving timetable");
    }
    
    changeScreenFade(gebi("feed-screen"));
}

function pressEnter(event) {
    if (event.keyCode === 13) {
        login();
    }
}
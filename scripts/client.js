const { getUrlWithAuth, getUrlWithAuthHashed, getStore } = require('electron').remote.require('./main.js');
const httpntlm = require('node-http-ntlm');
const settings = getStore();

function login() {
    let button = gebi("login-submit");
    button.innerText = "";
    button.style.backgroundColor = "#7A6B7F";

    let spinner = document.createElement("div");
    spinner.classList.add("spinner");
    button.appendChild(spinner);

    username = gebi("login-username").value;
    password = gebi("login-password").value;

    getUrlWithAuth("https://daymap.gihs.sa.edu.au/daymap/student/dayplan.aspx", username, password, (err, res) => {
        if(err || res.statusCode != 200) {
            shake(gebi("login-username"));
            shake(gebi("login-password"));
            shake(gebi("login-username-caption"));
            shake(gebi("login-password-caption"));
            shake(gebi("login-remember"));
            shake(gebi("login-remember-text"));
        }
        else {
            if(gebi("login-remember").checked) {
                settings.set('username', username);
                settings.set('lm_password', httpntlm.ntlm.create_LM_hashed_password(password));
                settings.set('nt_password', httpntlm.ntlm.create_NT_hashed_password(password));
            }

            loginSuccess(res.body);
        }

        button.innerText = "Connect to Daymap";
        button.style.backgroundColor = "";
    });
}

function loginSuccess(content) {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(content));

    gebi("main-screen").appendChild(p);

    changeScreen("main-screen");
}

window.onload = function() {
    if(settings.get('username') && settings.get('lm_password') && settings.get('nt_password')) {
        getUrlWithAuthHashed("https://daymap.gihs.sa.edu.au/daymap/student/dayplan.aspx", settings.get('username'), settings.get('lm_password').data, settings.get('nt_password').data, (err, res) => {
            if(!(err || res.statusCode != 200)) {
                loginSuccess(res.body);
            }
            document.body.classList.add("loaded");
        });
    } else {
        document.body.classList.add("loaded");
    }

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            login();
        }
    });
}
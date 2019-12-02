const { getUrlWithAuth } = require('electron').remote.require('./main.js')

function login() {
    username = gebi("login-username").value;
    password = gebi("login-password").value;

    getUrlWithAuth("https://daymap.gihs.sa.edu.au/daymap/student/dayplan.aspx", username, password, (err, res) => {
        if(err || res.statusCode != 200) {
            shake(gebi("login-username"));
            shake(gebi("login-password"));
            shake(gebi("login-username-caption"));
            shake(gebi("login-password-caption"));
        }
        else {
            loginSuccess(res.body);
        }
    })
}

function loginSuccess(content) {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(content));

    gebi("main-screen").appendChild(p);

    changeScreen("main-screen");
}
const { app, BrowserWindow, Menu } = require('electron');
const httpntlm = require('node-http-ntlm');
const Store = require('electron-store');

const store = new Store();

let win;

function createWindow() {
    if (process.platform == 'darwin') {
        win = new BrowserWindow({ width: 1200, height: 800, minWidth: 1200, minHeight: 800, webPreferences: { nodeIntegration: true }, backgroundColor: '#FFF', titleBarStyle: 'hidden' });
    } else {
        win = new BrowserWindow({ width: 1200, height: 800, minWidth: 1200, minHeight: 800, webPreferences: { nodeIntegration: true }, backgroundColor: '#FFF', frame: false });
    }
    Menu.setApplicationMenu(null);
    win.webContents.openDevTools({ mode: "detach" })
    win.loadFile('index.html');
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow); 

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

function getUrlWithAuth(url, username, password, callbackFn) {
    httpntlm.get({
        url: url,
        username: username,
        password: password
    }, (err, res) => callbackFn(err, res));
}

function getUrlWithAuthHashed(url, username, lm_password, nt_password, callbackFn) {
    httpntlm.get({
        url: url,
        username: username,
        lm_password: new Buffer.from(lm_password),
        nt_password: new Buffer.from(nt_password)
    }, (err, res) => callbackFn(err, res));
}

function getStore() {
    return store;
}

module.exports = { getUrlWithAuth, getUrlWithAuthHashed, getStore }
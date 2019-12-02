const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const fs = require('fs');

let win;

function createWindow() {
    win = new BrowserWindow({ width: 1200, height: 800, minWidth: 1200, minHeight: 800, webPreferences: { nodeIntegration: true }, backgroundColor: '#FFF' });
    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
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

const template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New File',
                click: () => {}
            },
            {
                label: 'Open File...',
                click: () => {}
            },
            {
                label: 'Open Folder...',
                click: () => {}
            },
            {
                label: 'Open Recent',
                submenu: [
                    {
                        label: 'thing1'
                    },
                    {
                        label: 'thing2'
                    }
                ]
            },
            {
                label: 'Open Console',
                click: () => { 

                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Save'
            },
            {
                label: 'Save As...'
            },
            {
                label: 'Save All'
            },
            {
                type: 'separator'
            },
            {
                label: 'Auto Save'
            },
            {
                label: 'Preferences',
                submenu: [
                    {
                        label: 'Settings'
                    }
                ]
            },
            {
                role: 'toggledevtools',
                accelerator: 'F12'
            },
            {
                type: 'separator'
            },
            {
                label: 'Revert File'
            },
            {
                label: 'Close File'
            },
            {
                label: 'Close Folder'
            },
            {
                label: 'Close All',
                click: () => { 

                }
            },
            {
                type: 'separator'
            },
            {
                role: 'close',
                accelerator: 'Alt+F4'
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            {
                type: 'separator'
            },
            {
                label: 'Find'
            },
            {
                label: 'Replace'
            }
        ]
    }
]

function getUrlWithAuth(url, username, password, callbackFn) {
    let httpntlm = require('node-http-ntlm');
    httpntlm.get({
        url: url,
        username: username,
        password: password
    }, (err, res) => callbackFn(err, res));
}

module.exports = { getUrlWithAuth }
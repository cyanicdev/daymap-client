const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const fs = require('fs');

let win;

app.on('ready', () => {
    win = new BrowserWindow({ width: 1200, height: 800, minWidth: 1024, minHeight: 600, webPreferences: { nodeIntegration: true }, backgroundColor: '#FFF' });
    win.loadFile('index.html');
    win.on('closed', () => {
        win = null;
    });
});

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

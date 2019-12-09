const remote = require('electron').remote;

function gebi(idName) {
    return document.getElementById(idName);
}

function gebc(className) {
    return document.getElementsByClassName(className);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        handleWindowControls();
    }
};

function handleWindowControls() {
    if(process.platform == "win32") {
        // Windows
        let win = remote.getCurrentWindow();

        document.getElementById('min-button').addEventListener("click", event => {
            win.minimize();
        });
    
        document.getElementById('max-button').addEventListener("click", event => {
            win.maximize();
        });
    
        document.getElementById('restore-button').addEventListener("click", event => {
            win.unmaximize();
        });
    
        document.getElementById('close-button').addEventListener("click", event => {
            win.close();
        });
    
        toggleMaxRestoreButtons();
        win.on('maximize', toggleMaxRestoreButtons);
        win.on('unmaximize', toggleMaxRestoreButtons);
    
        function toggleMaxRestoreButtons() {
            if (win.isMaximized()) {
                document.body.classList.add('maximized');
            } else {
                document.body.classList.remove('maximized');
            }
        }
    } else if(process.platform == 'darwin') {
        // Mac
        let menuButtons = document.getElementById('window-controls');
        menuButtons.parentNode.removeChild(menuButtons);
    } else {
        // Linux
        let titlebar = document.getElementById('titlebar');
        titlebar.parentNode.removeChild(titlebar);
    }
}
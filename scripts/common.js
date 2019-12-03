function gebi(idName) {
    return document.getElementById(idName);
}

function gebc(className) {
    return document.getElementsByClassName(className);
}

function changeScreen(newScreen) {
    for(let item of gebc("screen")) {
        item.classList.add("inactive-screen");
    }

    gebi(newScreen).classList.remove("inactive-screen");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
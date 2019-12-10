function shake(element) {
    if(element.classList.contains("shake")) {
        return;
    }

    element.classList.add("shake");
    
    setTimeout(function (){
        element.classList.remove("shake");
    }, 500);
}

function changeScreenFade(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    oldScreen.className = "inactive-screen";
    newScreen.className = "active-screen";

    showOrHideMenu(newScreen);
}

function changeScreenPushUp(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    oldScreen.className = "inactive-screen";
    oldScreen.classList.add("push-up-out");
    newScreen.className = "active-screen";
    newScreen.classList.add("push-up-in");

    setTimeout(function (){
        oldScreen.classList.remove("push-up-out");
        newScreen.classList.remove("push-up-in");
    }, 500);

    showOrHideMenu(newScreen);
}

function changeScreenPushDown(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    oldScreen.className = "inactive-screen";
    oldScreen.classList.add("push-down-out");
    newScreen.className = "active-screen";
    newScreen.classList.add("push-down-in");

    setTimeout(function (){
        oldScreen.classList.remove("push-down-out");
        newScreen.classList.remove("push-down-in");
    }, 500);

    showOrHideMenu(newScreen);
}

function changeScreenPushLeft(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    oldScreen.className = "inactive-screen";
    oldScreen.classList.add("push-left-out");
    newScreen.className = "active-screen";
    newScreen.classList.add("push-left-in");

    setTimeout(function (){
        oldScreen.classList.remove("push-left-out");
        newScreen.classList.remove("push-left-in");
    }, 500);

    showOrHideMenu(newScreen);
}

function changeScreenPushRight(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    oldScreen.className = "inactive-screen";
    oldScreen.classList.add("push-right-out");
    newScreen.className = "active-screen";
    newScreen.classList.add("push-right-in");

    setTimeout(function (){
        oldScreen.classList.remove("push-right-out");
        newScreen.classList.remove("push-right-in");
    }, 500);

    showOrHideMenu(newScreen);
}

function showOrHideMenu(element) {
    if(element.parentElement.tagName == "MAIN") {
        gebi("menu").classList.remove("hidden");
    } else {
        gebi("menu").classList.add("hidden");
    }
}
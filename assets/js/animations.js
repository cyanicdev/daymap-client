function shake(element) {
    if(element.classList.contains("shake")) {
        return;
    }

    element.classList.add("shake");
    
    setTimeout(function (){
        element.classList.remove("shake");
    }, 500);
}

function handleScreens(newScreen, oldScreen) {
    oldScreen.classList.add("inactive-screen");
    oldScreen.classList.remove("active-screen");
    newScreen.classList.add("active-screen");
    newScreen.classList.remove("inactive-screen");
}

function changeScreenFade(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    handleScreens(newScreen, oldScreen);
    showOrHideMenu(newScreen);
    handleLastScreen(oldScreen);
}

function changeScreenPushUp(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    handleScreens(newScreen, oldScreen);
    oldScreen.classList.add("push-up-out");
    newScreen.classList.add("push-up-in");

    setTimeout(function (){
        oldScreen.classList.remove("push-up-out");
        newScreen.classList.remove("push-up-in");
    }, 500);

    showOrHideMenu(newScreen);
    handleLastScreen(oldScreen);
}

function changeScreenPushDown(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    handleScreens(newScreen, oldScreen);
    oldScreen.classList.add("push-down-out");
    newScreen.classList.add("push-down-in");

    setTimeout(function (){
        oldScreen.classList.remove("push-down-out");
        newScreen.classList.remove("push-down-in");
    }, 500);

    showOrHideMenu(newScreen);
    handleLastScreen(oldScreen);
}

function changeScreenPushLeft(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    handleScreens(newScreen, oldScreen);
    oldScreen.classList.add("push-left-out");
    newScreen.classList.add("push-left-in");

    setTimeout(function (){
        oldScreen.classList.remove("push-left-out");
        newScreen.classList.remove("push-left-in");
    }, 500);

    showOrHideMenu(newScreen);
    handleLastScreen(oldScreen);
}

function changeScreenPushRight(newScreen) {
    let oldScreen = gebc("active-screen")[0];
    handleScreens(newScreen, oldScreen);
    oldScreen.classList.add("push-right-out");
    newScreen.classList.add("push-right-in");

    setTimeout(function (){
        oldScreen.classList.remove("push-right-out");
        newScreen.classList.remove("push-right-in");
    }, 500);

    showOrHideMenu(newScreen);
    handleLastScreen(oldScreen);
}

function showOrHideMenu(element) {
    if(element.parentElement.tagName == "MAIN") {
        gebi("menu").classList.remove("hidden");
        gebt("main")[0].classList.remove("hidden");
    } else {
        gebi("menu").classList.add("hidden");
        gebt("main")[0].classList.add("hidden");
    }
}

function handleLastScreen(screen) {
    lastScreen = gebc("last-screen")[0];

    if(lastScreen) {
        lastScreen.classList.remove("last-screen");
    }

    screen.classList.add("last-screen");
}
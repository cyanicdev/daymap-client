const tabs = [
    "feed-screen",
    "timetable-screen",
    "assessment-screen"
]

let selectedTab = 0;

function changeTab(tabNum) {
    let lastTab = selectedTab;
    selectedTab = tabNum;

    if(lastTab < selectedTab) {
        // Going right
        changeScreenPushLeft(gebi(tabs[selectedTab]));
    } else if(lastTab > selectedTab) {
        // Going left
        changeScreenPushRight(gebi(tabs[selectedTab]));
    }

    let tabIndicatior = gebi("menu-selected");
    tabIndicatior.style.left = (selectedTab * 125).toString() + "px";
}
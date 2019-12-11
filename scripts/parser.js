function parseTimetable(content) {
    // Do something here to convert raw .aspx page into array of classes
    console.log(content.getElementsByClassName("PlanClass"));
    createTimetable(null);
}
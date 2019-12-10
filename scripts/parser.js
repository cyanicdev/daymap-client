function parseTimetable(content) {
    // Do something here to convert raw .aspx page into array of classes
    //console.log(content.getElementsByClassName("PlanClass"));

    
    console.log(content.getElementById('ctl00_cp_spnTimetable'));
    // pls don't delete mitch just yet
    createTimetable(content.getElementById('ctl00_cp_spnTimetable').childNodes[0].childNodes[0]);
}
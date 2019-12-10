let parser = new DOMParser();

function parseTimetable(content) {
    // Do something here to convert raw .aspx page into array of classes

    parsedContent = parser.parseFromString(content, 'text/html');

    //console.log(content.getElementsByClassName("PlanClass"));
    
    createTimetable(parsedContent.getElementById('ctl00_cp_spnTimetable').childNodes[0].childNodes[0]);
}
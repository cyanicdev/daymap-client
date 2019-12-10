function createTimetable(classes) {
    // param classes: array of classes with information such as room, teacher, time etc.
    // this function will calculate length of classes and create elements in the timetable tab accordingly
    Array.from(document.getElementsByClassName('line1')).forEach(e => {
        e.childNodes[1].innerText = classes.childNodes[4].childNodes[1].getElementsByClassName('ttSubject')[0].innerText;
    });

    // for my reference
    Array.from(classes).forEach(e => {
        console.log(e.innerText);
    });
}
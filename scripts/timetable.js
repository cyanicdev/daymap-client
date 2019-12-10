function createTimetable(classes) {
    // param classes: array of classes with information such as room, teacher, time etc.
    // this function will calculate length of classes and create elements in the timetable tab accordingly
    Array.from(document.getElementsByClassName('line1')).forEach(e => {
        e.childNodes[1].innerText = classes.childNodes[4].childNodes[1].getElementsByClassName('ttSubject')[0].innerText;
        e.childNodes[5].innerText = classes.childNodes[4].childNodes[1].getElementsByClassName('ttRoom')[0].innerText.split('\n')[0];
        e.childNodes[3].innerText = classes.childNodes[4].childNodes[1].getElementsByClassName('ttRoom')[0].innerText.split('\n')[1];
    });

    Array.from(document.getElementsByClassName('line2')).forEach(e => {
        e.childNodes[1].innerText = classes.childNodes[5].childNodes[1].getElementsByClassName('ttSubject')[0].innerText;
        e.childNodes[5].innerText = classes.childNodes[5].childNodes[1].getElementsByClassName('ttRoom')[0].innerText.split('\n')[0];
        e.childNodes[3].innerText = classes.childNodes[5].childNodes[1].getElementsByClassName('ttRoom')[0].innerText.split('\n')[1];
    });

    // there has got to be a more efficient way to do this 
    // also, will throw error if person doen't have a lesson then (free line)
}
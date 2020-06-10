function createTimetable(classes) {
    // param classes: array of classes with information such as room, teacher, time etc.
    
    Array.from(document.getElementsByClassName('line1')).forEach(e => {
        if(classes[0][0]) {
            e.children[0].innerText = classes[0][0].subject;
            e.children[1].innerText = classes[0][0].teacher;
            e.children[2].innerText = classes[0][0].room;
        } else {
            e.children[0].innerText = "Free";
            e.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
    });

    Array.from(document.getElementsByClassName('line2')).forEach(e => {
        if(classes[0][1]) {
            e.children[0].innerText = classes[0][1].subject;
            e.children[1].innerText = classes[0][1].teacher;
            e.children[2].innerText = classes[0][1].room;
        } else {
            e.children[0].innerText = "Free";
            e.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
    });

    Array.from(document.getElementsByClassName('line3')).forEach(e => {
        if(classes[0][2]) {
            e.children[0].innerText = classes[0][2].subject;
            e.children[1].innerText = classes[0][2].teacher;
            e.children[2].innerText = classes[0][2].room;
        } else {
            e.children[0].innerText = "Free";
            e.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
    });

    Array.from(document.getElementsByClassName('line4')).forEach(e => {
        if(classes[0][3]) {
            e.children[0].innerText = classes[0][3].subject;
            e.children[1].innerText = classes[0][3].teacher;
            e.children[2].innerText = classes[0][3].room;
        } else {
            e.children[0].innerText = "Free";
            e.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
    });

    Array.from(document.getElementsByClassName('line5')).forEach(e => {
        if(classes[0][4]) {
            e.children[0].innerText = classes[0][4].subject;
            e.children[1].innerText = classes[0][4].teacher;
            e.children[2].innerText = classes[0][4].room;
        } else {
            e.children[0].innerText = "Free";
            e.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
    });

    Array.from(document.getElementsByClassName('line6')).forEach(e => {
        if(classes[1][0]) {
            e.children[0].innerText = classes[1][0].subject;
            e.children[1].innerText = classes[1][0].teacher;
            e.children[2].innerText = classes[1][0].room;
        } else {
            e.children[0].innerText = "Free";
            e.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
    });

    Array.from(document.getElementsByClassName('line7')).forEach(e => {
        if(classes[1][1]) {
            e.children[0].innerText = classes[1][1].subject;
            e.children[1].innerText = classes[1][1].teacher;
            e.children[2].innerText = classes[1][1].room;
        } else {
            e.children[0].innerText = "Free";
            e.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
    });

    Array.from(document.getElementsByClassName('mentorclass')).forEach(e => {
        if(e.childElementCount) {
            if(classes[1][2]) {
                e.children[0].innerText = classes[1][2].subject;
                e.children[1].innerText = classes[1][2].teacher;
                e.children[2].innerText = classes[1][2].room;
            } else {
                e.children[0].innerText = "Free";
                e.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            }
        }
    });

    // there has got to be a more efficient way to do this, right?
}
let parser = new DOMParser();

class Class {
    constructor(subject, teacher, room) {
        this.subject = subject;
        this.teacher = teacher;
        this.room = room;
    }
}

function parseTimetable(content) {
    // Do something here to convert raw .aspx page into array of classes

    let parsedContent = parser.parseFromString(content, 'text/html');
    let classes = new Array(5); // Each day of the week
    for (let i = 0; i < classes.length; i++) { 
        classes[i] = new Array(5); 
    } 

    let classArray = Array.from(parsedContent.getElementsByClassName('PlanClass'));

    classArray.forEach(aClass => {
        let col = aClass.parentElement.cellIndex;
        let row = aClass.parentElement.parentElement.rowIndex;
        let info = aClass.getElementsByClassName("ttRoom")[0].innerText.replace(/(\r\n|\n|\r)/gm, "").split(" ");
        let room = info[0];
        let teacher = info.slice(-2).join(" ").toSentenceCase();
        switch (col) {
            case 1: // Monday
                switch (row) {
                    case 4:
                        classes[0][0] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 5:
                        classes[0][1] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 8:
                        classes[0][2] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 9:
                        classes[0][3] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 13:
                        classes[0][4] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    default:
                        break;
                }
                break;

            case 2: // Tuesday
                switch (row) {
                    case 4:
                        classes[1][0] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 5:
                        classes[1][1] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 8:
                        classes[1][2] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 9:
                        classes[1][3] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 13:
                        classes[1][4] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    default:
                        break;
                }
                break;
        
            case 3: // Wednesday
                switch (row) {
                    case 4:
                        classes[2][0] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 7:
                        classes[2][1] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 8:
                        classes[2][2] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 12:
                        classes[2][3] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    default:
                        break;
                }
                break;

            case 4: // Thursday
                switch (row) {
                    case 4:
                        classes[3][0] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 5:
                        classes[3][1] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 8:
                        classes[3][2] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 9:
                        classes[3][3] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 13:
                        classes[3][4] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    default:
                        break;
                }
                break;

            case 5: // Friday
                switch (row) {
                    case 4:
                        classes[4][0] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 7:
                        classes[4][1] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 8:
                        classes[4][2] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    case 12:
                        classes[4][3] = new Class(aClass.getElementsByClassName("ttSubject")[0].innerText, teacher, room);
                        break;
                    default:
                        break;
                }
                break;

            default:
                break;
        }
    });

    createTimetable(classes);
}

function parseAssessment(content) {

    let parsedContent = parser.parseFromString(content, 'text/html');

    let classArray = parsedContent.getElementsByClassName('SORTTABLE')[0];

    createAssessmentTable(classArray.innerHTML);
}
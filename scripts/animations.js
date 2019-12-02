function shake(element) {
    if(element.classList.contains("shake")) {
        return;
    }

    element.classList.add("shake");
    
    setTimeout(function (){
        element.classList.remove("shake");
    }, 500);
}

function pushDown(oldelement, newelement) {
    oldelement.classList.add("push-down-out");
    newelement.classList.add("push-down-in");

    setTimeout(function (){
        oldelement.classList.remove("push-down-out");
        newelement.classList.remove("push-down-in");
    }, 500);
}
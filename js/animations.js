function shake(element) {
    if(element.classList.contains("shook")) {
        return;
    }

    element.classList.add("shook");
    
    setTimeout(function (){
        element.classList.remove("shook");
    }, 500);
}
function openEvent(evt, eventName) {
    var i, tabcontent, navlink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    navlink = document.getElementsByClassName("navlink");
    for (i = 0; i < tabcontent.length; i++) {
        navlink[i].className = navlink[i].className.replace(" active", "");
    }
    document.getElementById(eventName).style.display = "block";
    evt.currentTarget.className += " active";
}
 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
        tabcontents[i].classList.remove("active-tab");
    }
    document.querySelector(`#${tabname}`).classList.add("active-tab");
    event.target.classList.add("active-link");
}
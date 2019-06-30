document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === "#s") {
        document.getElementById("login").style.display = "none";
        document.getElementsByClassName("_login")[0].style.color = "grey";
    } else if (window.location.hash === "#l") {
        document.getElementById("signup").style.display = "none";
        document.getElementsByClassName("_register")[0].style.color = "grey";
    }

    document.getElementsByClassName("_login")[0].onclick = loginclick;
    document.getElementsByClassName("_register")[0].onclick = registerclick;
}, false);


function loginclick() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementsByClassName("_register")[0].style.color = "grey";
    document.getElementsByClassName("_login")[0].style.color = "#d40062";

}

function registerclick() {
    document.getElementById("signup").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementsByClassName("_login")[0].style.color = "grey";
    document.getElementsByClassName("_register")[0].style.color = "#d40062";
}

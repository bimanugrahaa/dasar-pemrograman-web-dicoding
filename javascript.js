const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav ul");

hamburger.addEventListener('click', function () {
    //Navigation toogle animation
    nav.classList.toggle('nav-action');
    hamburger.classList.toggle('hamburger_animation');
});
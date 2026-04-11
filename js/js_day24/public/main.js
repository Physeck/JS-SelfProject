const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation();

}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true //after click, event listener will automatically be removed (1x use only)
}));
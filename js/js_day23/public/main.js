const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('nav-stick');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('nav-stick');
    }
}

window.addEventListener('scroll', fixNav);
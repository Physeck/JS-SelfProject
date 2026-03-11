const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
function debounce(func, timeout = 20) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const sliderImg = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.log(window.scrollY);
    sliderImg.forEach(sliderImg => {
        //half of img width
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImg.height / 2;
        //bottom of img width
        const imgBottom = sliderImg.offsetTop + sliderImg.height;
        const isHalfShown = slideInAt > sliderImg.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImg.classList.add('active');
        } else {
            sliderImg.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));



const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const hero = document.querySelector('.hero');
const txt = hero.querySelector('a');
const travel = 200; //200px

function shadow(e) {
    // console.log(e);
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    };
    const xT = Math.round((x / width * travel) - (travel / 2));
    const yT = Math.round((y / height * travel) - (travel / 2));

    txt.style.textShadow = `
    ${xT}px ${yT}px 0 rgba(255,0,255,0.7),
    ${xT * -1}px ${yT * -1}px 0 rgba(0,255,255,0.7),
    ${yT}px ${xT}px 0 rgba(255, 0, 0, 0.7),
    ${yT * -1}px ${xT * -1}px 0 rgba(0, 0, 255, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);

const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const pressed = [];
const secretCode = 'justin';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    // pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); - conventional
    if (pressed.length > secretCode.length) { // - modern
        pressed.shift(); // remove the first (oldest) item
    }

    if (pressed.join('').includes(secretCode)) {
        alert('FNC Physeck#BYEBY - VALORANT IGN');
        cornify_add();
    }
    console.log(pressed);
});
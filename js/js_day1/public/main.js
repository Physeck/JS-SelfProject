const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});

function playSound(e) {
    const keyPressed = e.key.toUpperCase();
    const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
    const key = document.querySelector(`.key[data-key="${keyPressed}"]`);
    if (!audio) return;

    audio.currentTime = 0;//reset to spamm
    audio.play();
    key.classList.add("playing");
};

function removeTransition(e) {
    const keyPressed = e.key.toUpperCase();
    const key = document.querySelector(`.key[data-key="${keyPressed}"]`);
    if (!key) return;

    key.classList.remove("playing");
};

window.addEventListener('keydown',playSound);
window.addEventListener('keyup',removeTransition);


const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const score = document.querySelector('.score');
const mole = document.querySelectorAll('.mole');
const hole = document.querySelectorAll('.hole');
let lastHole;
let timeUp = false;
let time;
let scoreboard;

function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const selectedHole = holes[idx];
    if (selectedHole === lastHole) {
        return randHole(holes);
    }

    lastHole = selectedHole;
    return selectedHole;
}

function molePeep() {
    const time = randTime(500,2000);
    const selectedHole = randHole(hole);
    selectedHole.classList.add('up');

    setTimeout(() => {
        selectedHole.classList.remove('up');
        if (!timeUp) molePeep();
    }, time);
}

function startGame() {
    clearTimeout(time);
    score.textContent = 0;
    timeUp = false;
    scoreboard = 0;
    molePeep();
    time = setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return;
    scoreboard++;
    const hole = this.parentElement;
    if (!hole.classList.contains('up')) return;
    hole.classList.remove('up');
    score.textContent = scoreboard;
}

mole.forEach(mole => mole.addEventListener('click', bonk));

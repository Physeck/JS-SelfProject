const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const msg = document.querySelector('.message');
const guessInput = document.getElementById('guess');
const lastInputText = document.querySelector('.last-num');
let guessNumber = Math.floor(Math.random() * 101);
let lastInputNum = [];

function checkNum() {
    const guess = Number(guessInput.value);
    if (!guessInput.value || isNaN(guess)) return;

    if (guess < 0 || guess > 100) {
        msg.className = 'message wrong';
        msg.textContent = 'Please enter a number between 0 and 100';
        return;
    }

    if (lastInputNum.length >= 9) {
        msg.textContent = `Game Over!, the number was ${guessNumber}`;
        guessInput.disabled = true;
        return;
    }

    lastInputNum.push(guess);
    lastInputText.textContent = lastInputNum.join(', ');

    msg.classList.remove('wrong', 'correct');

    if (guess === guessNumber) {
        msg.classList.add('correct');
        msg.textContent = `Correct! the number was ${guessNumber}`
        guessInput.disabled = true;
    } else if (guess > guessNumber) {
        msg.classList.add('wrong');
        msg.textContent = 'The number is too high'
    } else {
        msg.classList.add('wrong');
        msg.textContent = 'The number is too low'
    }

    guessInput.value = '';
    if (!guessInput.disabled) {
        guessInput.focus();
    }
}

function reset() {
    window.location.reload();
}

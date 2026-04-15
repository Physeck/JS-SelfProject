const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
let countDown;
const timerDisplay = document.querySelector('.timer');
const timeThen = document.querySelector('.time-then');
const buttons = document.querySelectorAll('[data-time]')

function timer(second) {
    clearInterval(countDown);
    const now = Date.now();
    const then = now + second * 1000;
    displayTimeLeft(second);
    displayTimeThen(then);
    countDown = setInterval(() => {
        const secLeft = Math.round((then - Date.now()) / 1000);
        if (secLeft < 0) {
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secLeft);
    }, 1000);
}

function displayTimeLeft(second) {
    const hours = Math.floor(second / 3600);
    const minutes = Math.floor((second % 3600) / 60);
    const secLeft = second % 60;
    const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secLeft < 10 ? '0' : ''}${secLeft}`;
    // document.title = display;
    timerDisplay.textContent = display;
}

function displayTimeThen(second) {
    const now = new Date(second);
    console.log(now);
    const hours = now.getHours();
    //preference for adjusted time
    // const adjustedTime = hours > 12 ? hours - 12 : hours;

    const minutes = now.getMinutes();
    timeThen.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.minutes_form.addEventListener('submit', function (e) {
    const min = (this.minutes.value) * 60;
    e.preventDefault();
    timer(min);
});


const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const timeArr = [...document.querySelectorAll('[data-time]')];

const seconds = timeArr
    .map(node => node.dataset.time)
    .map(timecode => {
        const [min, sec] = timecode.split(':').map(parseFloat);
        return (min * 60) + sec;
    })
    .reduce((total, vidSec) => total + vidSec);

// console.log(seconds);

const hLeft = Math.floor(seconds / 3600);
let secLeft = seconds % 3600;

const minLeft = Math.floor(secLeft / 60);
secLeft = secLeft % 60;

console.log(`${hLeft}h ${minLeft}m ${secLeft}s`);


const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function skipTime() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
    //detik sekarang / durasi video trs hasil dikali 100 => bar buat flex Basis progress__bar
    const percent = (video.currentTime / video.duration) * 100;
    // console.log(percent);
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    // offset mouse / width video trs hasil dikali durasi => detik skipnya
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    // console.log(`${e.offsetX} / ${progress.offsetWidth} * ${video.duration}`)
    // console.log(scrubTime);
    video.currentTime = scrubTime;
}

function handleRangeUpd() {
    video[this.name] = this.value;
    // console.log(this.name,this.value);    
}

video.addEventListener('play', () => toggle.textContent = '❚❚');
video.addEventListener('pause', () => toggle.textContent = '▶︎');
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

skipButton.forEach(skip => skip.addEventListener('click', skipTime));
range.forEach(range => range.addEventListener('change', handleRangeUpd));

let mouseDown = false
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true); //hold
window.addEventListener('mouseup', () => mouseDown = false); //release

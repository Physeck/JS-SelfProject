const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function (e) {
    const y = e.pageY - this.offsetTop;
    const percentage = y / this.offsetHeight;
    const min = 0.5;
    const max = 5;
    const height = Math.round(percentage * 100) + '%';
    const playbackRate = percentage * (max - min) + min;
    
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(1) + 'x';

    video.playbackRate =  playbackRate;


});

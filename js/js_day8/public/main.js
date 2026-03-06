const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----

const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
const clearCanvas = document.getElementById("clearBtn");

clearCanvas.addEventListener('click', () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
});

ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 8;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if(hue>360){
        hue = 0;
    }
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
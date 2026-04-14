const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;    //start mouse X position 
    scrollLeft = slider.scrollLeft;    //posisi scroll bar    
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();    
    const x = e.pageX - slider.offsetLeft; //scroll drag x position
    const walk = (x - startX) * 2;
    
    slider.scrollLeft = scrollLeft - walk;   //pos scroll bar when scrolled     
    
});

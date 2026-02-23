const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const secDeg = ((sec / 60) * 360) + 90;
    const minDeg = ((min / 60) * 360) + 90;
    const hourDeg = ((hour % 12) / 12) * 360 + (min / 60) * 30 + 90;

    if (sec === 0) {
        secondHand.style.transition = "none";
    } else {
        secondHand.style.transition = "";
    }

    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    // console.log(hour/12 ,min/60 ,sec/60);
    // console.log(hour+"(h):"+min+"(m):"+sec+"(s)");
}

function setHoursN() {
    const numbersContainer = document.querySelector(".numbers");
    
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement("div");
        number.classList.add("number");
    
        const rotation = i * 30;
    
        number.style.transform = `rotate(${rotation}deg)`;
        number.innerHTML = `<span style="display:inline-block; transform: rotate(-${rotation}deg)">${i}</span>`;
    
        numbersContainer.append(number);
    }
}

setHoursN();
setInterval(setDate, 1000);

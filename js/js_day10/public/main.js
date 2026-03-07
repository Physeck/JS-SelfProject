const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----

const cb = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastCheck;

function handleCheck(e) {
    //check if shift key = down & checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        cb.forEach(cb => {
            if (cb === this || cb === lastCheck) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                cb.checked = true;
            }
        });
    }
    lastCheck = this;
}

cb.forEach(cb => cb.addEventListener('click', handleCheck));
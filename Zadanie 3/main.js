const btnTime = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const panel = document.querySelector(".time div");

let time = 0;
let active = false;
let idT;


const timer = () => {
    if (!active) {
        active = !active;
        idT = setInterval(start, 10);
        btnTime.textContent = "Pauza";
    } else {
        active = !active;
        clearInterval(idT);
        btnTime.textContent = "Start";
    }
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    active = false;
    panel.textContent = "...";
    clearInterval(idT);
    btnTime.textContent = "Start";
}


btnTime.addEventListener("click", timer);
btnReset.addEventListener("click", reset);
let timeDisplay = document.querySelector("#timeDisplay");
let startbtn = document.querySelector("#start");
let pausebtn = document.querySelector("#pause");
let resetbtn = document.querySelector("#reset");

let startTime = 0;
let elaspedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let sec = 0;
startbtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elaspedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pausebtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elaspedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetbtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elaspedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    sec = 0;
    timeDisplay.innerHTML = "00:00:00";
    
});

function updateTime() {
    elaspedTime = Date.now() - startTime;
    
    sec = Math.floor((elaspedTime / 1000) % 60);
    min = Math.floor((elaspedTime /( 1000*60)) % 60);
    hrs = Math.floor((elaspedTime / (1000 * 60 * 60)) % 60);
    
    hrs = formatZeros(hrs);
    min = formatZeros(min);
    sec = formatZeros(sec);
    timeDisplay.textContent = `${hrs}:${min}:${sec}`;

    function formatZeros(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

}
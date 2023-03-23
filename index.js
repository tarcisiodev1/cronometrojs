const buttonPause = document.getElementById("pause");
const buttonStop = document.getElementById("stop");
const buttonStart = document.getElementById("start");
const h1 = document.querySelector("#h1");

console.log(h1);
let s = 0;
let min = 0;
let hr = 0;
let interval = {};

function twoDigits(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

const start = () => {
  interval = setInterval(setTime, 1000);
};
const pause = () => {
  clearInterval(interval);
};
const stop1 = () => {
  clearInterval(interval);
  clearInterval(interval);
  s = 0;
  min = 0;
  alert("Vôce parou em: " + h1.innerText);
  h1.innerText = "00:00:00";
};

const setTime = () => {
  s++;
  if (s == 60) {
    s = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hr++;
  }

  h1.innerText = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(s)}`;
};

buttonStart.addEventListener("click", start);
buttonStop.addEventListener("click", stop1);
buttonPause.addEventListener("click", pause);

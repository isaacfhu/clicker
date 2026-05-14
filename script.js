let clickValue = 0;
let incrementValue = 1;
let theme = "white";
const clickerBtn = document.querySelector(".click-area");
const pageIncrementValue = document.querySelector(".increment-value");
const clickerCounter = document.querySelector(".click-counter");
const themeBtn = document.querySelector(".theme-btn");
const upgradeBtn = document.querySelector(".upgrade-btn");

clickerBtn.onclick = function () {
  clickValue += incrementValue;
  clickerCounter.textContent = clickValue;
};

themeBtn.onclick = function () {
  if (theme === "white") {
    document.body.style.background = "black";
    document.body.style.color = "white";
    theme = "black";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
    theme = "white";
  }
};

upgradeBtn.onclick = function () {
  incrementValue += 1;
  pageIncrementValue.textContent = incrementValue;
};

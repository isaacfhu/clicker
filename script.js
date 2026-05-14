let clickValue = 0;
let upgradeCost = 10;
let incrementValue = 1;
let theme = "white";
const buttons = document.querySelectorAll("button:not(.upgrade-btn)");
const clickerBtn = document.querySelector(".click-area");
const clickerCounter = document.querySelector(".click-counter");
const themeBtn = document.querySelector(".theme-btn");
const upgradeBtn = document.querySelector(".upgrade-btn");
const pageUpgradeCost = document.querySelector(".upgrade-cost");
const pageIncrementValue = document.querySelector(".increment-value");

clickerBtn.onclick = function () {
  clickValue += incrementValue;
  clickerCounter.textContent = clickValue;
};

themeBtn.onclick = function () {
  if (theme === "white") {
    document.body.style.background = "black";
    document.body.style.color = "white";

    buttons.forEach(function (btn) {
      btn.style.filter = "invert(1)";
    });

    theme = "black";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";

    buttons.forEach(function (btn) {
      btn.style.filter = "invert(0)";
    });

    theme = "white";
  }
};

upgradeBtn.onclick = function () {
  if (clickValue >= upgradeCost) {
    clickValue -= upgradeCost;
    upgradeCost *= 2;
    incrementValue += 1;
    pageUpgradeCost.textContent = upgradeCost;
    clickerCounter.textContent = clickValue;
    pageIncrementValue.textContent = incrementValue;
  }
};

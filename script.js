let clickValue = 0;
const clickerBtn = document.querySelector(".click-area");
const clickerCounter = document.querySelector(".click-counter");

function onBtnClicked() {
  clickValue += 1;
  clickerCounter.textContent = clickValue;
}

clickerBtn.onclick = onBtnClicked;

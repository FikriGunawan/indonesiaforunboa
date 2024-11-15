"use strict";

/* CUSTOMIZATIONS */
const AUTO_MOVE = false;
const ANIMATION_TIME = 1000;
const AUTO_MOVE_DELAY = 5000;

/* CODE */

const STATE = {
  currentInd: null
};

const triggers = Array.from(document.querySelectorAll(".trigger"));
const targets = triggers.map((trigger) => {
  return document.querySelector(trigger.dataset.target);
});
const triggerSpec = document.querySelector(".trigger-spec");
triggerSpec.style.width = `${100 / triggers.length}%`;

triggers.forEach((trigger, ind) => {
  trigger.addEventListener("click", async () => {
    await setActiveCard(ind);
  });
});

setActiveCard(0);

async function setActiveCard(ind) {
  if (STATE.currentInd === ind) return;

  if (STATE.currentInd !== null) {
    triggers[STATE.currentInd].classList.remove("active");
    targets[STATE.currentInd].classList.remove("active");
  }

  triggers[ind].classList.add("active");
  targets[ind].classList.add(
    ind < STATE.currentInd ? "slideLeft" : "slideRight"
  );
  triggerSpec.style.transform = `translateX(${ind}00%)`;

  const prevInd = STATE.currentInd;
  STATE.currentInd = ind;

  await new Promise((resolve) => setTimeout(resolve, ANIMATION_TIME));

  targets[STATE.currentInd].classList.add("active");
  targets[ind].classList.remove(ind < prevInd ? "slideLeft" : "slideRight");
}

async function autoLoop() {
  let currIter = 0;
  while (true) {
    await setActiveCard(currIter);
    await new Promise((resolve) => setTimeout(resolve, AUTO_MOVE_DELAY));
    currIter = (STATE.currentInd + 1) % triggers.length;
  }
}

if (AUTO_MOVE && AUTO_MOVE_DELAY) autoLoop();
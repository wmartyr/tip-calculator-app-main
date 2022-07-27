let tipAmount = 0;
let lastButtonId = "#tip-5"; // HTML id of the last button that was clicked
const bill = document.querySelector("#bill-amount");
const tips = document.querySelectorAll(".tip-button");
const numberOfPeople = document.querySelector("people-entry");
const customTipEntry = document.querySelector(".custom-tip");
let lastButton = document.querySelector(lastButtonId);

customTipEntry.value = "";

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    customTipEntry.value = "";
    tipAmount = parseInt(tip.id.slice(4));
    lastButton = document.querySelector(lastButtonId);
    lastButton.classList.remove("button-selected");
    tip.classList.add("button-selected");
    lastButtonId = "#" + tip.id;
    console.log({ tipAmount });
  });
});

customTipEntry.addEventListener("keyup", () => {
  tipAmount = isNaN(parseInt(customTipEntry.value)) ? 0 : parseInt(customTipEntry.value);
  if (tipAmount !== 0) {
    lastButton = document.querySelector(lastButtonId);
    lastButton.classList.remove("button-selected");
    lastButtonId = "#tip-5";
  }
  console.log({ tipAmount });
});

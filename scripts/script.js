let billAmount = 0;
let tipAmount = 0;
let lastButtonId = "#tip-5";
const billEntry = document.querySelector("#bill-amount");
const tips = document.querySelectorAll(".tip-button");
const numberOfPeople = document.querySelector("people-entry");
const customTipEntry = document.querySelector("#custom-tip");
let lastButton = document.querySelector(lastButtonId);

billEntry.value = "";
customTipEntry.value = "";

billEntry.addEventListener("keyup", () => {
  billEntry.classList.add("data-entered");
  billAmount = isNaN(parseFloat(billEntry.value)) ? 0 : parseFloat(billEntry.value);
  console.log({ billAmount });

})

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    customTipEntry.value = "";
    customTipEntry.classList.remove("data-entered");

    tipAmount = parseInt(tip.id.slice(4));
    lastButton = document.querySelector(lastButtonId);
    lastButton.classList.remove("button-selected");
    tip.classList.add("button-selected");
    lastButtonId = "#" + tip.id;
    console.log({ tipAmount });
  });
});

customTipEntry.addEventListener("keyup", () => {
  customTipEntry.classList.add("data-entered");
  tipAmount = isNaN(parseInt(customTipEntry.value)) ? 0 : parseInt(customTipEntry.value);
  if (tipAmount !== 0) {
    lastButton = document.querySelector(lastButtonId);
    lastButton.classList.remove("button-selected");
    lastButtonId = "#tip-5";
  }
  console.log({ tipAmount });
});

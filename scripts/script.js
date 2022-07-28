let billAmount = 0;
let tipAmount = 0;
let lastButtonId = "#tip-5";
let numberOfPeople = 0;
const billEntry = document.querySelector("#bill-amount");
const tips = document.querySelectorAll(".tip-button");
const numberOfPeopleEntry = document.querySelector("#people-entry");
const peopleEntry = document.querySelector(".people-entry");
const customTipEntry = document.querySelector("#custom-tip");
const errorMessage = document.querySelector("#error-message");
let lastButton = document.querySelector(lastButtonId);

billEntry.value = "";
customTipEntry.value = "";
numberOfPeopleEntry.value = "";

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

numberOfPeopleEntry.addEventListener("keyup", () => {
  numberOfPeopleEntry.classList.add("data-entered");
  numberOfPeople = parseInt(numberOfPeopleEntry.value);
  if (numberOfPeople === 0) {
    errorMessage.classList.remove("no-error");
    peopleEntry.classList.add("people-entry-error");
  } else if (isNaN(numberOfPeople)) {
    numberOfPeople = 0;
    errorMessage.classList.add("no-error");
    peopleEntry.classList.remove("people-entry-error");
  }
  console.log({ numberOfPeople });
})
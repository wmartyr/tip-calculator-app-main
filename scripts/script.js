let billAmount = 0;
let tipAmount = 0;
let lastButtonId = "#tip-5";
let numberOfPeople = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;

const billEntry = document.querySelector("#bill-amount");
const tips = document.querySelectorAll(".tip-button");
const numberOfPeopleEntry = document.querySelector("#people-entry");
const peopleEntry = document.querySelector(".people-entry");
const customTipEntry = document.querySelector("#custom-tip");
const errorMessage = document.querySelector("#error-message");
const tipPerPersonResult = document.querySelector(".tip-per-person");
const totalPerPersonResult = document.querySelector(".total-per-person");
const resetButton = document.querySelector(".reset-button");
let lastButton = document.querySelector(lastButtonId);

function calculateResult() {
  if (billAmount !== 0 && tipAmount !== 0 && numberOfPeople !== 0) {
    tipPerPerson = billAmount * tipAmount / 100 / numberOfPeople;
    totalPerPerson = (billAmount / numberOfPeople) + tipPerPerson;
    tipPerPersonResult.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalPerPersonResult.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
}

function resetValues() {
  billEntry.value = "";
  customTipEntry.value = "";
  numberOfPeopleEntry.value = "";
  billAmount = 0;
  tipAmount = 0;
  numberOfPeople = 0;
  lastButton = document.querySelector(lastButtonId);
  lastButton.classList.remove("button-selected");
}

resetValues();

// set bill amount
// set it to zero if invalid value entered
billEntry.addEventListener("keyup", () => {
  billEntry.classList.add("data-entered");
  billAmount = isNaN(parseFloat(billEntry.value)) ? 0 : parseFloat(billEntry.value);
  calculateResult();
})

// listen for clicks on preset tip values
// this will set button appearance when clicked
// this also resets the custom tip input field
tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    customTipEntry.value = "";
    customTipEntry.classList.remove("data-entered");
    tipAmount = parseInt(tip.id.slice(4));
    calculateResult();
    lastButton = document.querySelector(lastButtonId);
    lastButton.classList.remove("button-selected");
    tip.classList.add("button-selected");
    lastButtonId = "#" + tip.id;
  });
});

// set custom tips. Value is zero if invalid
// this also resets the preset button appearance
customTipEntry.addEventListener("keyup", () => {
  customTipEntry.classList.add("data-entered");
  tipAmount = isNaN(parseFloat(customTipEntry.value)) ? 0 : parseFloat(customTipEntry.value);
  calculateResult();
  if (tipAmount !== 0) {
    lastButton = document.querySelector(lastButtonId);
    lastButton.classList.remove("button-selected");
    lastButtonId = "#tip-5";
  }
});

// set number of people. Value is zero if invalid
// also sets appearance if value is zero
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
  calculateResult();
});

resetButton.addEventListener("click", () => {
  resetValues();
})
let billInput = document.querySelector(".bill-field input");
let peopleInput = document.querySelector(".people-field input");
let customInput = document.querySelector(".button-field input");

let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total-amount");

let tipButtons = document.querySelectorAll(".buttons button");
let resetBtn = document.querySelector(".reset-button");

let billValue;
let peopleValue;


billInput.addEventListener("input", () => {
    billValue = billInput.value;
    function containsAnyLetter(str) {
        return /[a-zA-Z]/.test(str);
    }
    if (containsAnyLetter(billValue)) {
        billInput.classList.add("error");
        billInput.nextElementSibling.classList.add("error");
    } else {
        billInput.classList.remove("error");
        billInput.nextElementSibling.classList.remove("error");
        if (peopleValue != 0 && window.percentage != null) {
            updateTotal();
            updateTipAmount();
        }
    }
})

peopleInput.addEventListener("input", () => {
    peopleValue = peopleInput.value;
    if (peopleValue == 0) {
        peopleInput.classList.add("error")
        peopleInput.nextElementSibling.classList.add("error")
    } else {
        peopleInput.classList.remove("error");
        peopleInput.nextElementSibling.classList.remove("error");
    }
    if (peopleValue != 0 && window.percentage != null) {
        updateTotal();
        updateTipAmount();
    }
})

customInput.addEventListener("input", () => {
    customValue = customInput.value;
    window.percentage = customValue;
    if (customInput != 0 && window.percentage != null) {
        updateTotal();
        updateTipAmount();
    }
})

for (let button of tipButtons) {
    button.addEventListener("click", () => {
        for (let button of tipButtons) {
            button.classList.remove("clicked");
        }
        button.classList.add("clicked");
        window.percentage = button.innerHTML.slice(0, -1);
        if (peopleValue != null && window.percentage != null) {
            updateTotal();
            updateTipAmount();
        }
    })
}

function updateTotal() {
    tipAmount.value = '';
    totalAmount.value = `€${billValue / peopleValue}`;
}

function updateTipAmount() {
    tipAmount.value = '';
    tipAmount.value = `€${(billValue * window.percentage) / (peopleValue * 100)}`;
}

resetBtn.addEventListener("click", () => {
    resetBtn.classList.toggle("clicked");
    billValue = billInput.value = 0;
    peopleInput.value = peopleValue = 0;
    tipAmount.value = '';
    totalAmount.value = '';
})

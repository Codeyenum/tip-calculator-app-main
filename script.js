let billInput = document.querySelector(".bill-field input");
let peopleInput = document.querySelector(".people-field input");

let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total-amount");

let tipButtons = document.querySelectorAll(".buttons button");

let billValue;
let peopleValue;


billInput.addEventListener("input", () => {
    billValue = billInput.value;
    // console.log(billValue);
    if (peopleValue != 0 && window.percentage != null) {
        updateTotal();
        updateTipAmount();
    }
})

peopleInput.addEventListener("input", () => {
    peopleValue = peopleInput.value;
    // console.log(peopleValue);
    if (peopleValue != 0 && window.percentage != null) {
        updateTotal();
        updateTipAmount();
    }
})

for (let button of tipButtons) {
    button.addEventListener("click", () => {
        window.percentage = button.innerHTML.slice(0, -1);
        if (peopleValue != null && window.percentage != null) {
            updateTotal();
            updateTipAmount();
        }
    })
}

// console.log(window.percentage);
function updateTotal() {
    tipAmount.value = '';
    totalAmount.value = `€${billValue / peopleValue}`;
}

function updateTipAmount() {
    tipAmount.value = '';
    tipAmount.value = `€${(billValue / peopleValue)  * (window.percentage / 100)}`;
}



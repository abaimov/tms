const operatorButtons = document.querySelectorAll(".basic-operator");
const numberButtons = document.querySelectorAll(".number-operator");
const resetButton = document.querySelector(".reset-operator");
const equalButton = document.querySelector(".equal-operator");
const resultSpan = document.querySelector("#value");

let prevOperatorUsed = "";
let prevResultSpanValue = "";

window.onload = function () {
  resetButton.addEventListener("click", clickResetButton);

  equalButton.addEventListener("click", clickResultButton);

  for (let button of numberButtons) {
    button.addEventListener("click", clickNumberButton);
  }

  for (let button of operatorButtons) {
    button.addEventListener("click", clickOperatorButton);
  }
};

const clickNumberButton = (event) => {
  event.stopPropagation();
  const numberButtonValue = event.target.innerHTML;
  const resultSpanValue = resultSpan.innerHTML;

  if (parseInt(resultSpanValue) === 0) {
    resultSpan.innerHTML = numberButtonValue;
  } else {
    resultSpan.innerHTML = resultSpanValue + numberButtonValue;
  }
};

const clickResetButton = (event) => {
  event.stopPropagation();
  const resultSpanValue = resultSpan.innerHTML;
  if (parseInt(resultSpanValue) !== 0) {
    resultSpan.innerHTML = "0";
  }
};

const clickOperatorButton = (event) => {
  event.stopPropagation();
  const operatorType = event.target.id;
  prevResultSpanValue = parseInt(resultSpan.innerHTML);
  resultSpan.innerHTML = "0";

  prevOperatorUsed = operatorType;
};

const clickResultButton = (event) => {
  event.stopPropagation();
  const currentResultSpanValue = parseInt(resultSpan.innerHTML);

  if (prevResultSpanValue !== "" && prevOperatorUsed !== "") {
    if (prevOperatorUsed === "plus") {
      resultSpan.innerHTML = prevResultSpanValue + currentResultSpanValue;
    }
    if (prevOperatorUsed === "minus") {
      resultSpan.innerHTML = prevResultSpanValue - currentResultSpanValue;
    }
    if (prevOperatorUsed === "division") {
      resultSpan.innerHTML = prevResultSpanValue / currentResultSpanValue;
    }
    if (prevOperatorUsed === "multiply") {
      resultSpan.innerHTML = prevResultSpanValue * currentResultSpanValue;
    }
  }

  prevResultSpanValue = "";
  prevOperatorUsed = "";
};

equalButton.addEventListener("click", clickResultButton);
resetButton.addEventListener("click", clickResetButton);

for (let button of numberButtons) {
  button.addEventListener("click", clickNumberButton);
}

for (let button of operatorButtons) {
  button.addEventListener("click", clickOperatorButton);
}

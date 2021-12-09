let attemptNumber = 0;
let expectedColor = prompt("Загадайте цвет");
let numExpectedColor = +prompt("Количество попыток");

for (let i = 0; i < numExpectedColor; i++) {
  let color = prompt("Угадайте цвет");

  if (expectedColor !== color) {
    console.log("Вы не угадали");
    if (attemptNumber < numExpectedColor) {
      attemptNumber += 1;
    }
    if (attemptNumber === numExpectedColor) {
      console.log("Попытки закончились, вы не угадали");
    }
  } else {
    console.log("Вы угадали");
    break;
  }
}

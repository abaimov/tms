let age = +prompt("age");

//1

if (!isNaN(age)) {
  if (age <= 0) {
    console.log("Неверно указан возраст");
  } else if (age > 18) {
    console.log(`Здравствуйте, мне ${age} лет`);
  } else {
    console.log(`Привет, мне ${age} лет`);
  }
} else {
  console.log("Неверно указан возраст");
}

//2

isNaN(age)
  ? console.log("Неверно указан возраст")
  : age <= 0
  ? console.log("Неверно указан возраст")
  : age > 0 && age < 18
  ? console.log(`Привет, мне ${age} лет`)
  : age > 18
  ? console.log(`Здравствуйте, мне ${age} лет`)
  : console.log("Неверно указан возраст");

//3

switch (!isNaN(age)) {
  case age <= 0:
    console.log("Неверно указан возраст");
    break;
  case age > 0 && age < 18:
    console.log(`Привет, мне ${age} лет`);
    break;
  case age > 18:
    console.log(`Здравствуйте, мне ${age} лет`);
    break;
  default:
    console.log("Неверно указан возраст");
}

let age = +prompt("age");

//1

if (!isNaN(age)) {
  if (age <= 0) {
    console.log("Неверно указан возраст");
  } else {
    console.log(`Привет мне ${age} лет`);
  }
} else {
  console.log("Неверно указан возраст");
}

//2

isNaN(age)
  ? console.log("Неверно указан возраст")
  : age <= 0
  ? console.log("Неверно указан возраст")
  : console.log(`Привет мне ${age} лет`);

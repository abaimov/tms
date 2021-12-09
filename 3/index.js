let answer;
let user = {
  name: prompt("Ваше имя"),
  surname: prompt("Ваша фамилия"),
  age: Number(prompt("Ваш возраст")),
  city: prompt("Ваш город"),
  isDriver: confirm("Есть ли у вас права"),
};

if (user.isDriver || user.age >= 18) {
  answer = "Вы нам подходите";
} else {
  answer = "Отказано";
}

console.log(
  `${user.name},${user.surname},${user.age},${user.city},${user.isDriver}`
);

console.log(answer);

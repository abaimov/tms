const userpetya = {
  name: "petya",
  transactions: [123, 123213213, -5, -8],
  sum: 10,
};

const uservasya = {
  name: "vasya",
  transactions: [10, 20, -5, -8],
  sum: 10,
};

console.everyUser = function (arr, string) {
  arr.forEach((user) => console.log(`${string} ${user.name}`));
};

console.everyUser([userpetya, uservasya], "Имя пользователя:");

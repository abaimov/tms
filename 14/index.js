const users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 16 },
  { name: "Sasha", age: 29 },
];

const form = document
  .getElementById("form")
  .addEventListener("submit", addUser);

function addUser(e) {
  e.preventDefault();
  const nameInp = document.querySelector(".name");
  const ageInp = document.querySelector(".age");

  const newUser = { name: nameInp.value, age: +ageInp.value };
  users.push(newUser);
  createList(newUser);
  nameInp.value = "";
  ageInp.value = "";
}

users.forEach((user) => createList(user));

function createList(user) {
  let createDiv = document.createElement("div");
  createDiv.classList.add("users");
  createDiv.innerHTML = `<span>${user.name}</span> : <span>${user.age}</span>`;
  document.body.append(createDiv);
}

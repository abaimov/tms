const users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 16 },
  { name: "Sasha", age: 29 },
];

for (const user of users) {
  let createDiv = document.createElement("div");
  createDiv.innerHTML = `<span>${user.name}</span> : <span>${user.age}</span>`;
  document.body.append(createDiv);
}

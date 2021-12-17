const users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 16 },
  { name: "Sasha", age: 29 },
];

const sumYoung = [...users]
  .sort((a, b) => a.age - b.age)
  .filter((item) => item.age < 18)
  .reduce((sum, current) => sum + current.age, 0);

console.log("sumYoung :>> ", sumYoung);

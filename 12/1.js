class User {
  constructor(firstName, secondName, age, city) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.city = city;
  }
}

let user1 = new User("Sasha", "Petrov", 30, "Minsk");
let user2 = new User("Misha", "Ivanov", 20, "Minsk");

User.prototype.funcInfo = function () {
  return {
    firstName: this.firstName,
    secondName: this.secondName,
    age: this.age,
    city: this.city,
  };
};

console.log(user1.funcInfo());
console.log(user2.funcInfo());

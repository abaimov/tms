function User(first_name, second_name, age, city) {
  this.first_name = first_name;
  this.second_name = second_name;
  this.age = age;
  this.city = city;
}

const user = new User("Ivan", "Ivanov", 12, "Minsk");
const user2 = new User("Dina", "Borisova", 18, "Minsk");
console.log(user);
console.log(user2);

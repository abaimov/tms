let user = {
  name: "Ivan",
  years: 19,
  car: "Subaru",
  telePhone: "iPhone",
  city: "Minsk",
};

let {
  name: userName,
  //   years: ,
  car: userCar,
  ...userOtherInfo
} = user;

console.log(userName);
console.log(userOtherInfo);

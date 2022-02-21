const germanCars = ["BMW", "Volkswagen"];
const japanCars = ["Honda", "Nissan"];

const stringCars = `[
    {"car": "BMW", "model": "5-series e39"}, 
    {"car": "Honda", "model":  "Civic (5G)"},
    {"name": "Nissan", "model": "Silvia (S14)"},
    {"name": "Volkswagen", "model": "Golf MK 3"}
]`;

const arrayCars = JSON.parse(stringCars);

const germanCarsArr = arrayCars.filter(
  (car) => germanCars.includes(car.car) || germanCars.includes(car.name)
);

const japanCarsArr = arrayCars.filter(
  (car) => japanCars.includes(car.car) || japanCars.includes(car.name)
);

const germanCarsString = JSON.stringify(germanCarsArr);
const japanCarsString = JSON.stringify(japanCarsArr);

console.log(germanCarsString);
console.log(japanCarsString);

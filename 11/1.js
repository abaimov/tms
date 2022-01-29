function HouseBuilder(width, height, numOfFloors) {
  this.width = width;
  this.height = height;
  this.numOfFloors = numOfFloors;
}

const firstHouse = new HouseBuilder(12, 22, 3);
const secondHouse = new HouseBuilder(15, 15, 2);

HouseBuilder.prototype.calcArea = function () {
  this.totalArea = this.width * this.height * this.numOfFloors;
  return this.totalArea;
};
console.log(firstHouse.calcArea());
console.log(secondHouse.calcArea());

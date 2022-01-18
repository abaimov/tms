class House {
  constructor(length, width, floors) {
    this.length = length;
    this.width = width;
    this.floors = floors;
  }

  static sortBuyFloors(HouseA, HouseB) {
    return HouseA.floors - HouseB.floors;
  }
}

class Skyscraper extends House {
  constructor(length, width, floors, offices) {
    super(length, width, floors);
    this.offices = offices;
  }
}

let firstSkyscraper = new Skyscraper(371, 120, 85, 220);
let secondSkyscraper = new Skyscraper(392, 140, 70, 110);
let thirdSkyscraper = new Skyscraper(333, 102, 72, 350);

let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];

console.log(skyscrapers.sort(House.sortBuyFloors));

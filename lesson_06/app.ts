class Vehicle {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  displayInfo(): string {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(
    brand: string,
    model: string,
    year: number,
    public numDoors: number
  ) {
    super(brand, model, year);
  }

  displayInfo(): string {
    return `${super.displayInfo()} with ${this.numDoors} doors`;
  }
}

class Bike extends Vehicle {
  constructor(brand: string, model: string, year: number, public type: string) {
    super(brand, model, year);
  }

  displayInfo(): string {
    return `${super.displayInfo()} - Type: ${this.type}`;
  }
}


const myCar = new Car("Toyota", "Fortuner", 2022, 4);
console.log(myCar.displayInfo());

const myBike = new Bike("Yamaha", "R15", 2021, "Sports");
console.log(myBike.displayInfo());

"use strict";
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}
class Car extends Vehicle {
    constructor(brand, model, year, numDoors) {
        super(brand, model, year);
        this.numDoors = numDoors;
    }
    displayInfo() {
        return `${super.displayInfo()} with ${this.numDoors} doors`;
    }
}
class Bike extends Vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }
    displayInfo() {
        return `${super.displayInfo()} - Type: ${this.type}`;
    }
}
const myCar = new Car("Toyota", "Fortuner", 2022, 4);
console.log(myCar.displayInfo());
const myBike = new Bike("Yamaha", "R15", 2021, "Sports");
console.log(myBike.displayInfo());

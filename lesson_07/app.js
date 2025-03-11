"use strict";
// Generic function implementation
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([true, false, true]));
// Generic class implementation
class GenericClass {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter(i => i !== item);
    }
    getAllItems() {
        return this.data;
    }
}
const numberStorage = new GenericClass();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getAllItems()); // Output: [10, 20]
const stringStorage = new GenericClass();
stringStorage.addItem("apple");
stringStorage.addItem("banana");
console.log(stringStorage.getAllItems()); // Output: ["apple", "banana"]

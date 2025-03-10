// Generic function implementation
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement<boolean>([true, false, true]));



// Generic class implementation
class GenericClass<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    removeItem(item: T): void {
        this.data = this.data.filter(i => i !== item);
    }

    getAllItems(): T[] {
        return this.data;
    }
}

const numberStorage = new GenericClass<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getAllItems());

const stringStorage = new GenericClass<string>();
stringStorage.addItem("apple");
stringStorage.addItem("banana");
console.log(stringStorage.getAllItems());


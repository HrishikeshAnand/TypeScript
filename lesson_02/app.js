"use strict";
const employee = {
    id: 101, // Readonly property
    name: "John Doe",
    department: "Engineering",
    salary: 50000, // Readonly property
};
employee.name = "Hrishikesh";
console.log(employee);

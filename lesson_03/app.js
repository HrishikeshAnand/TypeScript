"use strict";
// Example API response with extra properties
const apiResponse = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30, // Extra property (not defined in User)
    address: "123 Main St", // Extra property
};
// Assigning the API response to the User interface
const user = apiResponse;
console.log(user); // Works fine, but 'age' and 'address' are not part of the User type
// Accessing extra properties
console.log(apiResponse.age); // Works because TypeScript doesn't remove properties at runtime

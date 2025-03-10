"use strict";
// 1. Partial - Allows partial updates
const updateUser = (user) => {
    console.log("Updating user:", user);
};
updateUser({ name: "John Doe" }); // ✅ Allowed (partial update)
const userPreview = { id: 1, name: "Alice" };
console.log(userPreview);
const userWithoutEmail = { id: 2, name: "Bob", age: 25 };
console.log(userWithoutEmail);

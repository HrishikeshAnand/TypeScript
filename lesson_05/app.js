"use strict";
// Function to handle different request types
function handleRequest(type, url) {
    switch (type) {
        case "GET":
            return `Fetching data from ${url}`;
        case "POST":
            return `Sending data to ${url}`;
        case "PUT":
            return `Updating data at ${url}`;
        case "DELETE":
            return `Deleting data from ${url}`;
        default:
            return "Invalid request type";
    }
}
console.log(handleRequest("GET", "/api/users"));
console.log(handleRequest("POST", "/api/users"));
console.log(handleRequest("DELETE", "/api/users"));

"use strict";
function processFeedback(input) {
    if (typeof input === 'string') {
        console.log(`Processing text: ${input}`);
    }
    else if (typeof input === 'number') {
        console.log(`Processing number: ${input}`);
    }
    else if (typeof input === 'boolean') {
        console.log(`Processing states: ${input}`);
    }
    else {
        console.log(`${input} is unsupported type of input`);
    }
}
console.log();
processFeedback('Great Service!');
processFeedback(true);
processFeedback(404);
processFeedback(undefined);
processFeedback(null);
console.log();
let data;
console.log(data);

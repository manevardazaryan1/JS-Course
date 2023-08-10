'use strict'

// Task 6.
// Write a function which parses string integers. 
// If it's not possible to parse, then add null.

const parseInteger = function(arr) {
    const convertToNumber = num => Number(num) || null;
    
    return arr.map(convertToNumber)
}

// console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];
// console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];
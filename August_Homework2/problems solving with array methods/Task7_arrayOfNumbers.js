'use strict'

// Task 7.
// Given an array, return a new array that only includes the numbers.

const arrayOfNumbers = function(arr) {
    const filterNumber = num => typeof num === 'number' && !isNaN(num);
    
    return arr.filter(filterNumber);
}

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166,
NaN];

// console.log(arrayOfNumbers(arr)); // [1, 2, 55, 166]
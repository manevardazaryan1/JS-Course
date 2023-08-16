'use strict'

// Task 7.
// Given an array, return a new array that only includes the numbers.

const filterNumber = num => typeof num === 'number' && !isNaN(num);

const arrayOfNumbers = (arr, callback) => arr.filter(callback);

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];

// console.log(arrayOfNumbers(arr, filterNumber)); // [1, 2, 55, 166]
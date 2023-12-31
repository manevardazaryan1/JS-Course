'use strict'

// Task 10.
// Given an array, return the sum of numbers that are 18 or over.
const sum = (acc, num) =>  num > 18 ? acc + num: acc;

const arraySum = (arr, callback) => arr.reduce(callback, 0);

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

// console.log(arraySum(arr, sum)); // 1347
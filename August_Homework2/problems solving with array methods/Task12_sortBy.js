'use strict'

// Task 12.
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order. 
// - "Desc" returns a sorted array in descending order. 

function sortBy(arr, sortBy) {
    if (sortBy === 'Asc')
        arr.sort((x, y) => x - y);
    
    else if (sortBy === 'Desc') 
        arr.sort((x, y) => y - x);
    
    console.log(arr);
}

// sortBy([4, 3, 2, 1], "Asc"); // [1, 2, 3, 4]
// sortBy([7, 8, 11, 66]); // [7, 8, 11, 66]
// sortBy([7, 8, 11, 66], "Desc"); // [66, 11, 8, 7]
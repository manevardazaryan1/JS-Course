'use strict'

// JS map method implementation.

// variant 1.

const map = function(arr, callback) {
    let newArray = [];
    
    for(let i = 0; i < arr.length; ++i)
        newArray[i] = callback(arr[i], i, arr);
    
    return newArray;
}

// variant 2.

Array.prototype.myMap = function(callback) {
    let newArray = [];
    
    for(let i = 0; i < this.length; ++i)
        newArray[i] = callback(this[i], i, this);
    
    return newArray;
}
'use strict'

// JS map method implementation.

Array.prototype.myMap = function(callback) {
    let newArray = [];
    
    for(let i = 0; i < this.length; ++i)
        newArray[i] = callback(this[i], i, this);
    
    return newArray;
}
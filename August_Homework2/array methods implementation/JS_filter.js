'use strict'

// JS filter method implementation.

// variant 1.

const filter = function(arr, callback){
    let newArray = [];

    for (let i = 0; i < arr.length; ++i){
        if (callback(arr[i], i, arr))
            newArray[newArray.length] = arr[i];
    }
    
    return newArray;
}

// variant 2.

Array.prototype.myFilter = function(callback){
    let newArray = [];

    for (let i = 0; i < this.length; ++i){
        if (callback(this[i], i, this))
            newArray[newArray.length] = this[i];
    }
    
    return newArray;
}
'use strict'

// JS findeIndex method implementation.

// variant 1.

const findIndex = function(arr, callback) {
    for (let i = 0; i < arr.length; ++i)
        if (callback(arr[i], i, arr))
            return i;
    
    return -1
}

// variant 2.

Array.prototype.myFindIndex = function(callback) {
    for (let i = 0; i < this.length; ++i)
        if (callback(this[i], i, this)) 
            return i;
    
    return -1
}
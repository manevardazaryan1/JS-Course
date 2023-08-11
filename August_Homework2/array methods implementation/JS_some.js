'use strict'

// JS some method implementation.

// variant 1.

const some = function(arr, callback) {
    for (let i = 0; i < arr.length; ++i)
        if (callback(arr[i], i, arr))
            return true;
    
    return false;
}

// variant 2.

Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; ++i)
        if (callback(this[i], i, this))
            return true;
    
    return false;
}
'use strict'

// JS every method implementation.

// variant 1.

const every = function(arr, callback){
    for (let i = 0; i < arr.length; ++i)
        if (!callback(arr[i], i, arr))
            return false;
    
    return true;
}

// variant 2.

Array.prototype.myEvery = function(callback){
    for (let i = 0; i < this.length; ++i)
        if (!callback(this[i], i, this))
            return false;
    
    return true;
}
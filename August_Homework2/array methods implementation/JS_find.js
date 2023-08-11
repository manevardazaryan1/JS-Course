'use strict'

// JS find method implementation.

// variant 1.

const find = function(arr, callback) {
    for (let i = 0; i < arr.length; ++i)
        if (callback(arr[i]))
            return arr[i];
}

// variant 2.

Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; ++i)
        if (callback(this[i]))
            return this[i];
}
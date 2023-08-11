'use strict'

// JS forEach method implementation.

// variant 1.

const forEach = function(arr, callback) {
    for (let i = 0; i < arr.length; ++i)
        callback(arr[i], i, arr);
}

// variant 2.

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; ++i)
        callback(this[i], i, this);
}
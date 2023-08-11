'use strict'

// JS push method implementation.

// variant 1.

const push = function(arr, ...items) {
    for (let i = 0; i < items.length; ++i)
        arr[arr.length] = items[i];
        
    return arr.length;
}

// variant 2.

Array.prototype.myPush = function(...items) {
    for (let i = 0; i < items.length; ++i)
        this[this.length] = items[i];
        
    return this.length;
}
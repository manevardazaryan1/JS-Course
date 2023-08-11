'use strict'

// JS shift method implementation.

// variant 1.

const shift = function(arr) {
    if (!arr.length) return arr;

    const first = arr[0];
    
    for (let i = 1; i < arr.length; ++i)
        arr[i-1] = arr[i];
    
    arr.length -= 1;
    
    return first;
}

// variant 2.

Array.prototype.myShift = function() {
    if (!this.length) return this;

    const first = this[0];
    
    for (let i = 1; i < this.length; ++i)
        this[i-1] = this[i];
    
    this.length -= 1;
    
    return first;
}
'use strict'

// JS findeIndex method implementation.

Array.prototype.myFindIndex = function(callback) {
    for (let i = 0; i < this.length; ++i)
        if (Boolean(callback(this[i], i, this))) return i;
    
    return -1
}
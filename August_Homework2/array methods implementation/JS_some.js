'use strict'

// JS some method implementation.

Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; ++i)
        if (Boolean(callback(this[i], i, this)))
            return true;
    
    return false;
}
'use strict'

// JS every method implementation.

Array.prototype.myEvery = function(callback){
    for (let i = 0; i < this.length; ++i)
        if (!Boolean(callback(this[i], i, this)))
            return false;
    
    return true;
}
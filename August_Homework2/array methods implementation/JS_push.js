'use strict'

// JS push method implementation.

Array.prototype.myPush = function(...items) {
    for (let i = 0; i < items.length; ++i)
        this[this.length] = items[i];
        
    return this.length;
}
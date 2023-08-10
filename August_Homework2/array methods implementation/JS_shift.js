'use strict'

// JS shift method implementation.

Array.prototype.myShift = function() {
    if (!this.length) return this;

    const first = this[0];
    
    for (let i = 1; i < this.length; ++i)
        this[i-1] = this[i];
    
    this.length -= 1;
    
    return first;
}
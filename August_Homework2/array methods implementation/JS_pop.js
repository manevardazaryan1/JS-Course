'use strict'

// JS pop method implementation.

Array.prototype.myPop = function() {  
    const first = this[this.length - 1];
    
    this.length -= 1;
    
    return first;
}
'use strict'

// JS pop method implementation.

// variant 1.

const pop = function(arr) {  
    const first = arr[arr.length - 1];
    
    arr.length -= 1;
    
    return first;
}

// variant 2.

Array.prototype.myPop = function() {  
    const first = this[this.length - 1];
    
    this.length -= 1;
    
    return first;
}
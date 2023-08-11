'use strict'

// JS reduce method implementation.

// variant 1.

const reduce = function(arr, callback, accumulator = null) {
    if (!arr.length && accumulator === null) 
        return 'Reduce of empty array with no initial value';
        
    if (!accumulator) {
        if (typeof arr[0] === 'string')
            accumulator = '';
            
        else if (typeof arr[0] === 'number') 
            accumulator = 0;
        
    }
    
    for (let i = 0; i < arr.length; ++i)
        accumulator = callback(accumulator, arr[i]);
    
    return accumulator;
}

// variant 2.

Array.prototype.myReduce = function(callback, accumulator = null) {
    if (!this.length && accumulator === null) 
        throw new Error('Reduce of empty array with no initial value');
        
    if (!accumulator) {
        if (typeof this[0] === 'string')
            accumulator = '';
            
        else if (typeof this[0] === 'number') 
            accumulator = 0;
        
    }
    
    for (let i = 0; i < this.length; ++i)
        accumulator = callback(accumulator, this[i]);
    
    return accumulator;
}
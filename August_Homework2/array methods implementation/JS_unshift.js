'use strict'

// JS unshift method implementation.

// variant 1.

const unshift = function(arr, ...items){
    arr.length += items.length;
    
    for(let i = arr.length - 1; i >= 0; --i){
        if(i < items.length) 
            arr[i] = items[i];
        else
            arr[i] = arr[i - items.length];
    }

    return items[0];
}

// variant 2.

Array.prototype.myUnshift = function(...items){
    this.length += items.length;
    
    for(let i = this.length - 1; i >= 0; --i){
        if(i < items.length) 
            this[i] = items[i];
        else
            this[i] = this[i - items.length];
    }
    
    return items[0];
}
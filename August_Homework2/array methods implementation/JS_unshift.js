'use strict'

// JS unshift method implementation.

Array.prototype.myUnshift = function(...items){
    const first = items[0];
    
    let newArray = [...items];
    for(let i = 0; i < this.length; ++i)
        newArray[newArray.length] = this[i];

    for(let i = 0; i < newArray.length; ++i)
        this[i] = newArray[i];
        
    newArray = null;
    
    return first;
}
'use strict'

// JS slice method implementation.

Array.prototype.mySlice = function(start = null, end = null) {
    let newArray = [];
    
    if (start === null) return [...this];
    if (end === null) end = this.length;
    if (end > this.length) end = this.length;
    if (start < 0) start += this.length;
    if (end < 0) end += this.length;
    
    for (let i = start; i < end; ++i) 
        newArray[newArray.length] = this[i];
    
    return newArray;
}
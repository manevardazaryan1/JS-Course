'use strict'

// JS filter method implementation.

Array.prototype.myFilter = function(callback){
    let newArray = [];

    for (let i = 0; i < this.length; ++i){
        if (Boolean(callback(this[i], i, this)))
            newArray[newArray.length] = this[i];
    }
    
    return newArray;
}
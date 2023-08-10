'use strict'

// JS flat method implementation.

Array.prototype.myFlat = function(deep = 1) {
    if (deep < 1) return [...this];
    
    const newArray = [];
    
    function flattenArray(arr, newArray, deep) {
        if (deep < 0) { 
            newArray[newArray.length] = arr;
            return newArray;
        }
        
        for (let i = 0; i < arr.length; ++i) {
            if (Array.isArray(arr[i])) {
                arr = arr[i];
                return flattenArray(arr, newArray, --deep);
            } else
                newArray[newArray.length] = arr[i];
        }
        
        return newArray;
    }
    
    flattenArray(this, newArray, deep);
    
    return newArray;
}
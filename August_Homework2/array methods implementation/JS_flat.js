'use strict'

// JS flat method implementation.

// variant 1.

const flat = function(arr, deep = 1) {
    if (deep < 1) return [...arr];
    
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
    
    flattenArray(arr, newArray, deep);
    
    return newArray;
}

// variant 2.

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
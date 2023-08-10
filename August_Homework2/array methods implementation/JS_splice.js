'use strict'

// JS splice method implementation.

Array.prototype.mySplice = function(start = null, howMany = null, ...items) {
    const deletedItems = [];
    
    if (this.length && (start > 0 || (start < 0 && howMany !== null))) {
        let newArray = [];
    
        if (start < 0) start += this.length;
        if (howMany < 0) howMany = 0;
        if (howMany === null) howMany = this.length;
       
        const remainder = start + howMany - 1;
       
        for (let i = 0; i < this.length; ++i){
            if (i < start) newArray[i] = this[i];
            else
                deletedItems[deletedItems.length] = this[i];
            

            if (i >= start && items.length)
                for (let j = 0; j < items.length; ++j)
                    newArray[start + j] = items[j];
            
            if (i > remainder)
                newArray[newArray.length] = this[i];
        }
       
        this.length = newArray.length;

        for (let i = 0; i < newArray.length; ++i)
            this[i] = newArray[i];
       
        newArray = null;
    }
    
    if (!this.length && items.length)
        for (let i = 0; i < items.length; ++i) this[i] = items[i];
    
    return deletedItems;
}
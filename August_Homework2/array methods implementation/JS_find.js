'use strict'

// JS find method implementation.

Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; ++i)
        if (Boolean(callback(this[i])))
            return this[i];
}
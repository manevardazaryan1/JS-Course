'use strict'

// JS forEach method implementation.

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; ++i)
        callback(this[i], i, this);
}
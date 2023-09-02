const createCachingFunction = function() {
    const arr = [];

    return function(num) {
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] === num)
                return 'cached';
        }
        
        arr.push(num);
        return 'calculated';
    }
}
const fibonacci = function(num) {
    let num1, num2;
    num1 = num2 = 1;
    let num3;
    
    for (let i = 2; i < num; ++i) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3
}

const memoize = function(callback) {
    const arr = [];
    
    return function(num) {
        const res = callback(num);
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] === res)
                return res + '(cached)';
        }
        
        arr.push(res);
        return res + '(calculated)';
    }
}
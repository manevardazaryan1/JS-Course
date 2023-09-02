const add = (num1, num2, num3) => num1 + num2 + num3;


const partial = function(callback, num1) {
    const _num1 = num1;
    
    return function(num2, num3) {
        return callback(_num1, num2, num3);
    }
}
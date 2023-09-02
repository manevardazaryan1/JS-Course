const createCalculator = function(x) {
    return function(num1 ,num2) {
        switch (x) {
            case 'add':
                return num1 + num2;
            case 'multiply':
                return num1 * num2;
        }
    }
}
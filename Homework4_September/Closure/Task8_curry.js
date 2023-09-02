const add = (num1, num2, num3) => num1 + num2 + num3;

const curry = function(x) {
    return function(num1, num2 = null, num3 = null) {
        if (!num2){
            return function(num2, num3) {
                if (!num3){
                    return function(num3){
                        return num1 + num2 + num3;
                    }
                }
                return num2 + num3;
            }
        }
        if (num2 && !num3) {
            return function(num3) {
                return num1 + num2 + num3;
            } 
        }
        return num1 + num2 + num3;
    }
}
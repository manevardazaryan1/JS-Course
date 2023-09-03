const Calculator = function(){}

Calculator.prototype.add = (...args) => args.reduce((acc, num) => acc + num, 0);
Calculator.prototype.subtract = (num1, num2) => num1 - num2;
Calculator.prototype.multiply = (...args) => args.reduce((acc, num) => acc * num, 1);
Calculator.prototype.divide = (num1, num2) => num2 !== 0 ? num1 / num2 : 'Zero divison error';
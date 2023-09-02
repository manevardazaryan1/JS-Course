const power = function(num, degree) {
    if (degree === 1)
        return num;
    
    return num * power(num, degree - 1);
}

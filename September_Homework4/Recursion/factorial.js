function factorial(num) {
    if (num === 2)
        return num;
        
    return factorial(num - 1) * num;
}

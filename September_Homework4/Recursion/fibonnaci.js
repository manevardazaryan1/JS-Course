function fibonacci(res) {
    switch (res) {
        case 0:
            return 0;
        case 1:
            return 1;
    }
        
    return fibonacci(res - 1) + fibonacci(res - 2);
}
// Memoization using map

function fibonacci(num) {
    if (num < 2)
        return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function memorizedFibonacci(num, map, fn) {
    if (!map.get(num))
        map.set(num, fn(num))
}

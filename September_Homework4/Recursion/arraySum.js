const arraySum = function(arr, idx = 0) {
    if (idx === arr.length - 1)
        return arr[arr.length - 1];
    
    return arr[idx] + arraySum(arr, ++idx);
}

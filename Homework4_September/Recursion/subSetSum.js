function isSubsetSum(arr, n, k) {
    if (k === 0)
      return true;
  
    if (n === 0 || k < 0)
      return false;
  
    if (arr[n - 1] > k) 
      return isSubsetSum(arr, n - 1, k);
  
    return isSubsetSum(arr, n - 1, k) || isSubsetSum(arr, n - 1, k - arr[n - 1]);
  }
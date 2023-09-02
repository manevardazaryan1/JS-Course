function countOccurrences(arr, value) {
    if (arr.length === 0)
      return 0
    
    if (arr[0] === value) 
      return 1 + countOccurrences(arr.slice(1), value);
    else
      return countOccurrences(arr.slice(1), value);
  }
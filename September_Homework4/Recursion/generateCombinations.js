function generateCombinations(arr) {
    const result = [];
  
    function generate(current, start) {
      if (current.length === 2) {
        result.push([...current]);
        return;
      }
  
      for (let i = start; i < arr.length; ++i) {
        current.push(arr[i]);
        generate(current, i + 1);
        current.pop();
      }
    }
  
    generate([], 0);
  
    return result;
  }
let flattenObject = function(obj, parentKey = '') {
    let result = {};
  
    for (let key in obj) {
      
        let newKey = parentKey ? `${parentKey}.${key}` : key;
  
        if (typeof obj[key] === 'object') {
          const nestedObj = flattenObject(obj[key], newKey);
          result = { ...result, ...nestedObj };
        } else {
          result[newKey] = obj[key];
        }
    }
    return result;
  }
const flattenArray = (arr) => arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur), []);

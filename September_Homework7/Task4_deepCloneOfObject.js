function deepCloneOfObject(obj) {
    const clonedObj = {};
    
    for (const key in obj)
        Object.defineProperty(clonedObj, key, Object.getOwnPropertyDescriptor(obj, key));
    
    return clonedObj;
}



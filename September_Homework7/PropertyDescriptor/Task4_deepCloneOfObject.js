function deepCloneOfObject(obj) {
    const clonedObj = Object.create(obj);
    
    for (const key in obj)
        Object.defineProperty(clonedObj, key, Object.getOwnPropertyDescriptor(obj, key));
    
    return clonedObj;
}



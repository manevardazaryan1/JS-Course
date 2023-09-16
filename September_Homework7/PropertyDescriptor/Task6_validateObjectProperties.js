function validateObjectProperties(obj, schema) {
    newObj = {};
    let schemaKey, objKey;
    
    for (key in obj) {
        schemaKey = schema[key];
        objKey = obj[key];

        if (schemaKey.validate(objKey)) {
            Object.defineProperty(newObj, key, {
                value: objKey,
                writable: schemaKey.writable,
                enumerable: schemaKey.enumerable,
            })
        }
    }  
    
    return newObj;
}



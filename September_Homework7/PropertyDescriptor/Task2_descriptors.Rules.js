function setDescriptorRules(obj, descriptorsObj) {
    newObj = {...obj};

    return Object.defineProperties(newObj, descriptorsObj);
}
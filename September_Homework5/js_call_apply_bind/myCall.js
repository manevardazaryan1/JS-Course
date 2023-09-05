const myCall = function(func, context, ...args) {
    if (typeof func !== 'function')
        return `Error: ${func} is not function`;

    context = context ?? globalThis;

    const key = Date.now();

    context[key] = func;

    const result = context[key](...args);

    delete context[key];

    return result;
}


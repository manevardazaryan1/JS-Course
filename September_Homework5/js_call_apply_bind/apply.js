const myApply = function(func, context, argsArray) {
    if (typeof func !== 'function')
        return `Error: ${func} is not function`;

    context = context ?? globalThis;

    const key = Date.now();

    context[key] = func;

    const result = context[key](...argsArray);

    delete context[key];

    return result;
}
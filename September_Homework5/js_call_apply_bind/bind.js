const myBind = function(func, context, ...args) {
    return function(...wrapperArgs) {
        if (typeof func !== 'function')
        return `Error: ${func} is not function`;

        context = context ?? globalThis;

        const key = Date.now();

        context[key] = func;

        const arg = wrapperArgs ?? args;

        const result = context[key](...arg);

        delete context[key];

        return result;
    }
}

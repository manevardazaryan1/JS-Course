function myfunc(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof arg === 'string')
                resolve(arg.toUpperCase());
            reject(arg);
        }, 500)
    });
}

function squarePromise(arg) {
    return new Promise((resolve, reject) => {
        if (!isNaN(arg))
            resolve(arg ** 2);
        reject(new Error(`Cannot convert ${arg} to number`));
    });
}

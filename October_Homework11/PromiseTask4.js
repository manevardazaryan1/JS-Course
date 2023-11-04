function mapPromise(promise, fn) {
    return new Promise((resolve, reject) => {
        promise.then(data => resolve(fn(data))).catch(data => reject(data));
    });
}
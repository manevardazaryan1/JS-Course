// // promise implementaion


class MyPromise {
    constructor(callback) {
        this.callback = callback;
        this.state = 'Pending';
        this.value = null;

        const  resolve = (value) => {
            this.state = 'Fulfilled';
            this.value = value;
        }
    
        const reject =  (value) => {
            this.state = 'Rejected';
            this.value = value;
        }

        try {
            callback(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }   

    then(resolvedCallback, rejectedCallback = null) {
        if (this.state === 'Fulfilled') {
            return new MyPromise((resolve, reject) => {
                resolve(resolvedCallback(this.value));
            })
        } else if (this.state === 'Rejected' && typeof rejectedCallback === 'function'){
            reject(rejectedCallback(this.value));
        } else {
            return this;
        }
    }

    catch(rejectedCallback) {
        if (this.state === 'Rejected') {
            return new MyPromise((resolve, reject) => {
                reject(rejectedCallback(this.value));
            })
        } else {
            return this;
        }
    }

    finally(callback) {
        if (typeof callback === 'function') {
            try {
                callback();
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}
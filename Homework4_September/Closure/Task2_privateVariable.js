const privateVariable = function(num) {
    let _myNum = num;

    const obj = {
        get() {
              return _myNum;
        },

        set(num) {
            _myNum = num;
        }
    };
    
    return obj;
}
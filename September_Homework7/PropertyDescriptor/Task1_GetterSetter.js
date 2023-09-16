const obj = {
    _name: [],

    get name() {
        return this._name;
    },

    set name(name) {
        [fname, lname] = name.split(", ");
        this._name = [[fname, fname.length], [lname, lname.length]];
    },
};


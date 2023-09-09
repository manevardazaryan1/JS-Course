const schema = {
    name: {
        value: "",
        writable: true,
        validate: (value) => typeof value === "string",
    },
    
    
    age: {
        value: 0,
        writable: true,
        validate: (value) => typeof value === "number" && value >= 18,
    },
};

const obj = {
    name: 'Mane',
    age: 23,
}

function validateObjectProperties(obj, schema){
    for(key in obj){
        obj[key]
    }
}
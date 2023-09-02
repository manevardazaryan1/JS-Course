const createPerson = function(name, age) {
    let _name = name;
    let _age = age;
    
    const obj = {
        getName() {
            return _name;
        },
        getAge() {
            return _age;
        },
        setName(name) {
            _name = name;
        },
        setAge(age) {
            _age = age;
        }
    };
    
    return obj;
}
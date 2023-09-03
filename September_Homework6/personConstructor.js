const Person = function(name, age) {
    this.stomach = [];
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function(somefood) {
    if (this.stomach.length === 10)
        return "I ate enough";
    this.stomach.push(somefood);
}

Person.prototype.poop = function() {
    this.stomach.length = 0;
    return 'Empty stomach';
}

Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`;
}

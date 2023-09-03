const Person = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.compareAge = function(other){
    if (other.age === this.age)
        return `${other.name} is the same age as me.`;
    else if (other.age > this.age)
        return `${other.name} is older than me.`;
    else
        return `${other.name} is younger than me.`;
}   

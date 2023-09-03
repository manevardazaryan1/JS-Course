const Baby = function(name, age, favoriteToy){
    this.stomach = [];
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
}

Baby.prototype.eat = function(somefood){
    if (this.stomach.length === 10)
        return "I can't eat :(";
    this.stomach.push(somefood);
}

Baby.prototype.poop = function(){
    this.stomach.length = 0;
    return 'empty stomach';
}

Baby.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
}

Baby.prototype.play = function(toy){
    return `Play with ${toy}`;
}

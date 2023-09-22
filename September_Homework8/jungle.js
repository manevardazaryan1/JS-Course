class Food {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Animal {
    constructor(name, energy) {
      this.name = name;
      this.energy = energy || 50;
    }
  
    makeSound() {
      this.energy -= 3;
      return `${this.name} makes a sound.`;
    }
  
    eat(food) {
      this.energy += 5;
      return `${this.name} eats ${food.name}.`;
    }
  
    sleep() {
      this.energy += 10;
      return `${this.name} sleeps.`;
    }
  }
  
  class Tiger extends Animal {
    constructor(name) {
      super(name);
    }
  
    sleep() {
      this.energy += 15;
      return `${this.name} sleeps.`;
    }
  
    eat(food) {
      if (food instanceof Grain) {
        return `${this.name} can't eat that.`;
      } else {
        super.eat(food);
      }
    }
  }
  
  class Monkey extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      this.energy -= 4;
      return `${this.name} makes a sound.`;
    }
  
    eat(food) {
      this.energy += 2;
      return `${this.name} eats ${food.name}.`;
    }
  
    play() {
      if (this.energy >= 8) {
        this.energy -= 8;
        return `${this.name} plays: Oooo Oooo`
      } else {
        return `${this.name} says: I'm too tired.`;
      }
    }
  }
  
  class Snake extends Animal {
    constructor(name) {
      super(name);
    }
  }
  
  class Fish extends Food {
    constructor(name) {
      super(name);
    }
  }
  
  class Grain extends Food {
    constructor(name) {
      super(name);
    }
  }
  
  class Meat extends Food {
    constructor(name) {
      super(name);
    }
  }
  
  class Jungle {
    constructor() {
      this.animals = [];
    }
  
    addAnimal(animal) {
      this.animals.push(animal);
    }
  
    soundOff() {
      for (const animal of this.animals) 
        animal.makeSound();
    }
  }


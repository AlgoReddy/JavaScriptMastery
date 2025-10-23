// inheritance = allows a new class to inherit the propeties / methods from the parent classes . Inheritance helps us in code resuability

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(
      `this named animal ${this.name} eats & then later at night it sleeps`
    );
  }
  sleep() {
    console.log(` the animal ${this.name} sleeps after eating`);
  }
}

class Fish extends Animal {}
class Hawk extends Animal {}
class Bear extends Animal {}
const fish = new Fish("nem0");
const hawk = new Hawk("gadha peeeru");
fish.eat();
hawk.sleep();

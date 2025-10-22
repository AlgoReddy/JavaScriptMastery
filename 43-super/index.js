// super = keyword used in classes to call the constructors or properties or methods of the parent classes (superclass)
//this=this.object
//super = the parent

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`The ${this.name} moves at the speed of ${speed} kmph`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`this named animal ${this.name} does this ${this.runSpeed}`);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`this named animal ${this.name} does this ${this.swimSpeed}`);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    super.move(this.swimSpeed);
    console.log(`this named animal ${this.name} does this ${this.swimSpeed}`);
  }
}
const fish = new Fish("chutki ", 2, 10);
console.log(fish);
fish.swim();

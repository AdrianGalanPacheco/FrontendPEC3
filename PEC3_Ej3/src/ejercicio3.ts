// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.

abstract class Animal {
  static population: number = 0;

  constructor() {
    // Aumentar la población al crear un animal
    Animal.population++;
  }

  public abstract sound(): void;
}

class Dog extends Animal {
  color: string;

  // Constructor
  constructor(color: string) {
    super();
    this.color = color;
  }

  // Método sound
  public sound() {
    console.log("WOW");
  }

  // Método específico
  public iamadog() {
    console.log("yes, this is a dog");
  }
}

class Cat extends Animal {
  gender: string;

  // Constructor
  constructor(gender: string) {
    super();
    this.gender = gender;
  }

  // Método sound
  public sound() {
    console.log("MEOW");
  }

  // Método específico
  public iamacat() {
    console.log("yes, this is a cat");
  }
}

let animals: Animal[] = [];
animals.push(new Cat("male"));
animals.push(new Dog("white"));
animals.push(new Cat("female"));
animals.push(new Dog("black"));

// Por cada animal
for (let animal of animals) {
  // Hacer el ruido
  animal.sound();
  // Comprobar el tipo de animal y realizar el método específico
  if (animal instanceof Dog) {
    animal.iamadog();
  } else if (animal instanceof Cat) {
    animal.iamacat();
  }
}

/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/

console.log(Animal.population); //4

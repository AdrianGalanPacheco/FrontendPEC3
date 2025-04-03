// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        // Aumentar la población al crear un animal
        Animal.population++;
    }
    Animal.population = 0;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // Constructor
    function Dog(color) {
        var _this = _super.call(this) || this;
        _this.color = color;
        return _this;
    }
    // Método sound
    Dog.prototype.sound = function () {
        console.log("WOW");
    };
    // Método específico
    Dog.prototype.iamadog = function () {
        console.log("yes, this is a dog");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    // Constructor
    function Cat(gender) {
        var _this = _super.call(this) || this;
        _this.gender = gender;
        return _this;
    }
    // Método sound
    Cat.prototype.sound = function () {
        console.log("MEOW");
    };
    // Método específico
    Cat.prototype.iamacat = function () {
        console.log("yes, this is a cat");
    };
    return Cat;
}(Animal));
var animals = [];
animals.push(new Cat("male"));
animals.push(new Dog("white"));
animals.push(new Cat("female"));
animals.push(new Dog("black"));
// Por cada animal
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    // Hacer el ruido
    animal.sound();
    // Comprobar el tipo de animal y realizar el método específico
    if (animal instanceof Dog) {
        animal.iamadog();
    }
    else if (animal instanceof Cat) {
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

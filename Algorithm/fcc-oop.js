/* FCC OOP */

// Creating a method -----------------------------------------------
let dog = {
  name: "Spotty",
  age: 3,
  numLegs: 4,
  bark: function () {
    return "bark bark bark";
  }
}

console.log(dog.bark());

// Using this keyword to make code more reusable -----------------------------------------------
let cat = {
  name: "Catty",
  age: 2,
  numLegs: 4,
  meow: function () {
    return `I ${this.name}, am your master and am ${this.age} years old!`;
  }
}

console.log(cat.meow());

// Constructors -----------------------------------------------
function Animal(name, age, numLegs) {
  this.name = name;
  this.age = age;
  this.numLegs = numLegs;
}

// Prototypes as objects -----------------------------------------------
Animal.prototype = {
  tackle: function () {
    console.log(`You have been tackled by ${this.name}!`);
  },
  bodySlam: function () {
    console.log(`Body Slam!`);
  }
}

// Creating objects with constructors -----------------------------------------------
let duck = new Animal("Ducky", 5, 2);

console.log(duck);

// Instanceof
console.log(duck instanceof Animal);

// Defining new methods -----------------------------------------------
duck.quack = function () {
  return "quack quack quack";
}

// Own property check -----------------------------------------------
// Iterate over all properties in an object
let ownProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

// Prototype added as objects to instance duck -----------------------------------------------
let duckProps = [];

for (let property in duck) {
  duckProps.push(property);
}

console.log(duckProps);

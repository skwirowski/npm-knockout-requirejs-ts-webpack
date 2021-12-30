// eslint-disable-next-line max-classes-per-file
const num = 2;
const num2: number = 10;
const writing: string = 'some case';

const consoleMessage: (first: number, second: number, third: number) => void = function init(
  a: number,
  b: number,
  c: number
) {
  const result = a + b + c;
  console.log(`This is message ${result}`);
};

consoleMessage(num, num2, 90);

const names: string[] = ['Holey', 'John', 'Reed'];
const firstName = names[0];

const missing: number = null;
const outOfScope: string = undefined;

const pointsOne: {} = {
  x: 10,
  y: 20,
};

const squareIt = function(rect: { h: number; w?: number }) {
  if (rect.w) {
    return rect.h * rect.w;
  }
  return rect.h * rect.h;
};

const greetMe: (msg: string) => void = function(msg) {
  console.log(msg);
};

const helloPerson = (person = 'Random Citizen') => console.log(`Hello, ${person}`);
helloPerson();

interface Person {
  name: string;
  age?: number;
  kids: number;
  calculatePets: () => number;
  makeYounger: (years: number) => void;
  greet: (message: string) => string;
}

const somebody: Person = {
  name: 'Josie',
  age: 50,
  kids: 4,
  calculatePets() {
    return this.kids * 2;
  },
  makeYounger(yars) {
    console.log((this.age -= yars));
  },
  greet(message) {
    return message;
  },
};

class SomeClass {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }
}

class SomeAnotherClass {
  constructor(public engine: string) {}
}

document.title = 'Hello there';

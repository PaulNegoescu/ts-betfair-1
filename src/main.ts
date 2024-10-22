// import playRockPaperScissors from './exercise1';
import './exercise2';
// console.log(playRockPaperScissors());

let lName;
const age = 39;

// global scope: window, global, globalThis
// function scope
// block scope: const, let, class
// module scope

// Primitive Types: string, number, boolean, null, undefined, bigint, symbol
lName = 'Negoescu';

//Complex Types: Object, Array, Function, Map, Set
const grades = [5, 8, 10];
grades.push(3);
grades[0] = 10;

console.log(grades);

const person = {
  fName: 'Test',
};
person.fName = 'Andrei';
person.lName = 'Ionescu';

console.log(person);

// function declaration
function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2), add(4, 5), add);

// function expression
const multiply = function (a: number, b: number) {
  return a * b;
};

console.log(multiply(2, 5));

// functions are first class citizens
const add2 = add;
console.log(add2(1, 4));

// arrow functions
const pow = (a: number, b: number) => a ** b;
const returningObjects = () => ({ fName: 'Paul' });

const square = (a) => a ** 2;

console.log(pow(2, 3), returningObjects(), square(2));

// currying / closures
function createAdder(num1: number): (num2: number) => number
function createAdder(num1: number) {
  return (num2: number) => num1 + num2;
}

const addWithFive = createAdder(5);
const addWithTen = createAdder(10);

console.log(addWithFive(3), addWithTen(6));

for(let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 2000);
}

interface MyObj {
  func: (num1: number) => (num2: number) => number;
}

const o1: MyObj = {
  func: createAdder,
}

const o2 = {
  fName: 'Paul',
  lName: 'Negoescu',
  // sayHello: function() {
  //   return `Hello! My name is ${this.fName}.`;
  // },
  sayHello() {
    return `Hello! My name is ${this.fName}.`;
  },
  // sayHello: () => `Hello! My name is ${this.fName}.`,
};
console.log(o2.sayHello());

// this
const func = o2.sayHello;
console.log(func.call({ fName: 'Andrei'}));
// 1. "this" is determined at the moment of function invocation
//      a. 'this' is whatever is to the left of the '.'
//      b. 'this' is set using the first argument of the .call() or .apply() method
// 2. "this" is determined at the moment of function creation
//      a. in arrow functions 'this' is taken as a value from the scope
//      b. using .bind('here is "this"') similar to call or apply
// 3. "this" is explicitly set during object construction





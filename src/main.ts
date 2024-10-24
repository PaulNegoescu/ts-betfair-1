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


// rest parameter
function add3(...alteNum: number[]): number {
  return alteNum.reduce((sum, n) => sum + n);
}
const res = add3(1, 2, 3, 4, 5, 6);
console.log(res);


// spread operator
const arr = [4, 5, 6, 7, 8];
console.log(add3(...arr));

const arr2 = [9, 10, ...arr, 11, 12];

console.log(arr2);

const obj2 = {
  fName: 'Paul',
  lName: 'Popescu',
};

const obj3 = {
  ...obj2,
  lName: 'Negoescu',
  grades: [10, 5, 7],
};

console.log(obj2, obj3);

// shallow cloning using spread
const clonaObj = {...obj3};
clonaObj.grades.push(8);

console.log('clona', clonaObj);

// deep cloning / proper cloning
const clonaAdevarata = structuredClone(obj3);
clonaAdevarata.grades.push(20);

console.log('real', clonaAdevarata);

// NOT lossless!!!!!!!!!
const aproapeBuna = JSON.parse(JSON.stringify(obj3));
console.log(aproapeBuna);

// Destructuring
const [primul, , alTreilea] = arr2;

console.log({primul, alTreilea});

const {fName, grades: [,,,secondGrade]}: {fName: string, grades: number[]} = obj3;

console.log({fName, secondGrade});

interface Params {
  fName: string;
  lName: string
}
function destructuringTest({fName, lName}: Params) {
  return `${fName} ${lName}`;
}

console.log(destructuringTest(obj3));

// constructor functions
// type UserConstructor = (this: {fName: string, lName: string, getFullName: () => string}, fName: string, lName: string) => void;
// const User: UserConstructor = function (fName: string, lName: string) {
//   this.fName = fName;
//   this.lName = lName;
// }

// User.prototype.getFullName = function() {
//   return `${this.lName} ${this.fName}`
// }

class User implements IUser {
  private fullName: string;

  constructor(public fName: string, public lName: string) {
    this.fullName = `${this.fName} ${this.lName}`;
  }

  getFullName() {
    return this.fullName;
  }

  get reverseFullName() {
    return `${this.lName} ${this.fName}`
  }

  set reverseFullName(fullName: string) {
    [this.lName, this.fName] = fullName.split(' ');
  }

  calculateBmi(): string {
      return 'This is your BMI';
  }
}

const user1 = new User('Paul', 'Negoescu');
const user2 = new User('Andrei', 'Neagoe');
console.log(user1, user2.getFullName());

function doSomethingWithUser(u: User) {
  console.log(u.getFullName());
}

doSomethingWithUser(user2);

user1.reverseFullName = 'Paisvante Sonia';
console.log(user1.reverseFullName, user1.fName);

class Admin extends User implements IUser {
  public isAdmin = true;

  constructor(fName: string, lName: string, public age: number){
    super(fName, lName);
  };

  getFullName() {
    return super.getFullName() + ' is an admin!';
  }
}


const user3 = new Admin('Stefania', 'Matache', 13);

console.log(user3.getFullName());

interface IUser {
  calculateBmi(): string;
}

const usr: IUser = {
  calculateBmi() {
      return '';
  },
}

// REST - REpresentational State Transfer
//
// Request (client)
// POST - Create
// GET  - Read/Retrieve
// PATCH / PUT - Update
// DELETE - Delete
//
// Resource: http://bla.com/api/v2/resourceName
// GET /users -> list of users (array de obiecte de tip user)
// GET /users/13 -> a specific user with the id 13 (obiect de tip user)
// POST /users -> create a new user (obiectul de tip user trebuie trimis pe request body sub forma de JSON string)
// PUT /users/13 -> idempotent update of a specific user (idempotent === trebuie transmisa tot obiectul user, toate proprietatile indiferent ce se updateaza pentru ca entitatea va fi inlocuita complet in baza de date)
// PATCH /users/13 -> partial update (trimitem doar proprietatile care ne intereseaza sa fie actualizate)
// DELETE /user/13 -> deletes a user
//
// Response (server)
// 200 - OK
// 201 - CREATED 
// 400 - BAD REQUEST
// 401 - UNAUTHORIZED
// 403 - FORBIDDEN
// 404 - NOT FOUND
// 405 - METHOD NOT ALLOWED
// 500 - INTERNAL SERVER ERROR
// 502 - BAD GATEWAY


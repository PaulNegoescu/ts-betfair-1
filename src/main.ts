type myType = string | number;

let firstName: myType = 'Paul';
const lastName: myType = 'Negoescu';

firstName = 42;

console.log(firstName, lastName);

const grades: Array<myType> = [5, 7, 10, 10, 8, 9, 'foarte bine'];

console.log(grades);

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const result = add(1, 2);

console.log(result);

type ReturnType = [string, string];

function fancyPrint(msg: { color: string }): ReturnType;
function fancyPrint(msg: string, options: { color: string }): ReturnType;
function fancyPrint(
  msg: string | { color: string },
  options?: { color: string }
): ReturnType {
  //Type Guard
  let processedMsg, processedCss;
  if (typeof msg === 'string' && typeof options === 'object') {
    processedMsg = `%c${msg}`;
    processedCss = `color: ${options.color}`;
  }

  if (typeof msg === 'object' && 'color' in msg) {
    processedMsg = '%cHello World!';
    processedCss = `color: ${msg.color}`;
  }

  return [processedMsg, processedCss] as ReturnType;
}

console.log(...fancyPrint('Hello from function!', { color: '#bada55' }));
console.log(...fancyPrint({ color: '#c00' }));
// console.log('%cHello from console.log', 'color: #c00')

const coords: [number, string] = [0, '20'];

console.log(coords);

const person: Person2 = {
  fName: 'Paul',
  lName: 'Negoescu',
  height: 1.85,
  weight: 100,
  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(2);
  },
};
console.log(person.calculateBmi());

// type Person = {
//   fName: string;
//   lName: string;
//   age?: number;
//   height: number;
//   weight: number;
//   calculateBmi: () => string;
// }

function add2(a: number, b?: number) {
  return a + Number(b);
}

console.log(add2(1));

interface Person2 {
  fName: string;
  lName: string;
  age?: number;
  height: number;
  weight: number;
  calculateBmi: () => string;
}

interface Admin extends Person2 {
  isAdmin: true;
  rights: UserRights;
}

enum UserRights {
  GUEST = 'guest',
  EDITOR = 'editor',
  REVIEWER = 'reviewer',
}

const myAdmin: Admin = {
  fName: 'Adi',
  lName: 'Moldoveanu',
  isAdmin: true,
  calculateBmi() {
    return '';
  },
  height: 165,
  weight: 75,
  rights: UserRights.REVIEWER,
};
console.log(UserRights);



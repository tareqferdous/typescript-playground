// variable declaration with type annotation

let myAge: number = 28;

myAge = 29; // valid assignment
myAge = 30; // valid assignment
// myAge = "thirty"; // Error: Type 'string' is not assignable to type 'number'

let userName: string = "ferdous66";
userName = "john_doe"; // valid assignment
// userName = 12345; // Error: Type 'number' is not assignable to type 'string'

let isActive: boolean = true;
isActive = false; // valid assignment
// isActive = "yes"; // Error: Type 'string' is not assignable to type 'boolean'

// Function with typed parameters and return type

const addNumbers = (a: number, b: number): number => {
    return a + b;
};

console.log(addNumbers(5, 10)); // valid call

// array with type annotation

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6); // valid
// numbers.push("seven"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// object with type annotation

let person: { name: string; age: number } = {
    name: "Alice",
    age: 30,
};
person.age = 31; // valid
// person.name = 123; // Error: Type 'number' is not assignable to type 'string'

// union types
let mixed: number | string = 10;
mixed = "ten"; // valid
// mixed = true; // Error: Type 'boolean' is not assignable to type 'number | string'

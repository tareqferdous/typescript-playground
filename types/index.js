// variable declaration with type annotation
var myAge = 28;
myAge = 29; // valid assignment
myAge = 30; // valid assignment
// myAge = "thirty"; // Error: Type 'string' is not assignable to type 'number'
var userName = "ferdous66";
userName = "john_doe"; // valid assignment
// userName = 12345; // Error: Type 'number' is not assignable to type 'string'
var isActive = true;
isActive = false; // valid assignment
// isActive = "yes"; // Error: Type 'string' is not assignable to type 'boolean'
// Function with typed parameters and return type
var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(5, 10)); // valid call

// union types

let age: number | string | boolean = 25;
age = "30";
age = false;

let listOfAges: (number | string)[] = [25, "30", 35, "40"];
let listOfNames: (string | boolean)[] = ["Alice", true, "Bob", false];
let mixedList: (number | string | boolean)[] = [
    25,
    "Alice",
    true,
    30,
    "Bob",
    false,
];

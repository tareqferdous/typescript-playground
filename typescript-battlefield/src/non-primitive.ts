// array , object

// ts - tuple

// reference type : array
let bucketList: string[] = ["Kacchi Bhai", "Grilled Fish", "Kalai Ruti"];

// bazarList.push(true);

// union type
let mixedArray: (string | number)[] = [
  "Kacchi Bhai",
  28,
  "Grilled Fish",
  8,
  "Kalai Ruti",
  15,
];

// mixedArray.push(true);

// tuple type
let coordinates: [number, number] = [20, 30, 50];

let couple: [string, string] = ["Tareq", "Shawon"];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];

// reference type : object

const user: {
  organization: "Programming Hero"; // value => type : literal types
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};

const user1: {
  readonly organization: string; // access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};

console.log(user);

console.log(user1);

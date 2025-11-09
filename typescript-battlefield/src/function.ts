// normal function
function add(a: number, b: number): number {
  return a + b;
}

// arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// function with optional parameter
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// function as method in an object

const userInfo: {
  name: string;
  age: number;
  isMarried: boolean;
  getDetails: () => string;
} = {
  name: "Tareq",
  age: 29,
  isMarried: true,
  getDetails: function (): string {
    return `${this.name} is ${this.age} years old. Married: ${this.isMarried}`;
  },
};

console.log(userInfo)
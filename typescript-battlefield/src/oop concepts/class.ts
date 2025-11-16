// 🌟 Class & Object in TypeScript : 1.Object 2.Class 3.constructor 4.Method 5.Parameter Properties
// ===============================================

/*
---------------------------------------------------
🏷️ 1. Object কী?
---------------------------------------------------

Object হলো key–value আকারে ডেটা রাখার একটি গঠন (Structure)।

👉 Object এর ভিতরে থাকে:
   • Properties (key + value)
   • Methods (function)

✔️ উদাহরণ:
const user = {
  name: "Anwar",
  age: 22,
  isAdmin: false,
  greet() {
    return `Hello, ${this.name}`;
  },
};

👉 এখানে:
- name, age, isAdmin  → Property
- greet()             → Method
*/

// ******************************************************

/*

---------------------------------------------------
🏛️ 2. Class কী?
---------------------------------------------------

Class হলো Object তৈরির জন্য একটি Blueprint বা Template।

➡ একই ধরনের স্ট্রাকচারের একাধিক object তৈরি করতে Class ব্যবহার করা হয়।

✔️ সাধারণ একটি উদাহরণ:

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

👉 object তৈরি:
const userA = new User("Anwar", 22);
const userB = new User("Karim", 25);

console.log(userA.greet());
*/

// ******************************************************
// 🐾 বাস্তব উদাহরণ: Animal Class
// *

class Bird {
  name: string;
  sound: string;
  favoriteFood: string;

  constructor(name: string, sound: string, favoriteFood: string) {
    this.name = name;
    this.sound = sound;
    this.favoriteFood = favoriteFood;
  }

  makeSound() {
    return `${this.name} says ${this.sound}`;
  }
}

const parrot = new Bird("Parrot", "Mithu mithu", "Nuts");

// ******************************************************
// 🧩 Parameter Properties ব্যবহার করলে class আরও ছোট ও clean হয়
// ******************************************************

class Animal2 {
  constructor(
    public name: string,
    public specieh: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`The animal ${this.name} is making sound`);
  }
}

/*
Parameter Properties:
----------------------
✔ constructor এর ভিতরে property declare + assign — দুটোই এক লাইনে হয়ে যায়  
✔ আলাদা করে this.name = name; লিখতে হয় না  
*/

// ******************************************************
// 📊 Object vs Class (সহজ তুলনা)
// ******************************************************

/*
| বিষয়                | Object                           | Class                               |
| -------------------- | --------------------------------- | ------------------------------------ |
| সংজ্ঞা               | Key–value আকারে ডেটা            | Object বানানোর Blueprint            |
| তৈরি হয়              | সরাসরি literal দিয়ে              | new keyword দিয়ে                     |
| পুনরায় ব্যবহারযোগ্য   | তুলনামূলক কম                     | খুব সহজ                              |
| Method থাকে?          | থাকে                              | থাকে                                 |
| Type Checking         | type/interface লাগতে পারে        | class নিজেই টাইপ হিসেবে কাজ করে      |
*/

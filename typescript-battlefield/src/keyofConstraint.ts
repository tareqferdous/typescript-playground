// ===========================================================
//  keyof এবং keyof Constraint — TypeScript এর সহজ ব্যাখ্যা
// ===========================================================

/*
 ১ keyof কী?

 keyof হলো এমন একটা Type Operator যা কোনো Object টাইপের
সবগুলো "property name" (key) কে একসাথে Union Type হিসেবে ধরে ফেলে।

মানে যদি তোমার কাছে একটা object থাকে, যেমন:

type Example = {
  name: string;
  age: number;
}

তাহলে,
keyof Example ➜ "name" | "age"

অর্থাৎ keyof দিয়ে তুমি Object-এর keys গুলোকেই টাইপ হিসেবে ব্যবহার করতে পারো।
*/

// 🔹 Example 1
type Vehicle = {
  car: string;
  bike: string;
  cng: string;
};

// নিচের দুইটা আসলে একি কাজ করে
type VehicleKeysManual = "car" | "bike" | "cng";
type VehicleKeysAuto = keyof Vehicle; // keyof দিয়ে আগেরটার মতোই Union Type তৈরি হলো

const myVehicle: VehicleKeysAuto = "bike"; // ✅ ঠিক আছে
// const wrongVehicle: VehicleKeysAuto = "truck"; // ❌ Error: truck নেই Vehicle টাইপে

// ===========================================================
// ✅ ২️. keyof কিভাবে object access করতে সাহায্য করে?
// ===========================================================

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 1,
  name: "Anwarul Karim",
  address: {
    city: "Khulna",
  },
};

// সাধারণভাবে object থেকে value নেওয়া যায় এইভাবে

const name = user["name"]; // "Anwarul Karim"
const city = user["address"]["city"]; // "Khulna"

/*
এইভাবে কাজ করে ঠিকই, কিন্তু সমস্যাটা হলো —
=> key গুলো হার্ডকোড করা।
=> বড় প্রজেক্টে key পরিবর্তন হলে অনেক জায়গায় error হয়।
=> object টাইপ পরিবর্তন হলে অন্য কোড ভেঙে যায়।

🔹 তাই আমরা dynamic ভাবে, Type-safe পদ্ধতিতে value বের করতে পারবো
Generics + keyof constraint ব্যবহার করে।
*/

// ===========================================================
// ✅ ৩️.  keyof Constraint — Generics এর সাথে
// ===========================================================

/*
keyof constraint মানে হলো:
আমরা এমন একটা generic function বানাবো,
যেটা যেকোনো object থেকে value বের করতে পারবে,
কিন্তু শুধুমাত্র valid key দিয়েই।

 সিনট্যাক্স:
<T, K extends keyof T>

এখানে:
=>  T = Object Type
=> K = শুধুমাত্র সেই Object এর key গুলোর মধ্য থেকে একটা key
=> extends keyof T = মানে “K অবশ্যই ঐ object-এর key হতে হবে”
*/

const getPropertyFromObj = <T, S extends keyof T>(object: T, key: S): T[S] => {
  return object[key];
};

// ✅ ব্যবহার
const userName = getPropertyFromObj(user, "name"); // string
const userAddress = getPropertyFromObj(user, "address"); // { city: string }
// const wrongKey = getPropertyFromObj(user, "email"); // ❌ Error: email নেই User টাইপে

/*
 কেন এটা দারুণ?
--------------------------------
1️. কোনো ভুল key দিলে TypeScript error দেখাবে।
2️. যেই key দাও, সেই key অনুযায়ী value-এর টাইপ নির্ধারণ হবে।
3️. function টি Reusable — যে কোনো object এর জন্য কাজ করবে।
*/

const product = {
  name: "TypeScript Mastery Course",
  price: 999,
  available: true,
};

const prodName = getPropertyFromObj(product, "name"); // ✅ string
const prodPrice = getPropertyFromObj(product, "price"); // ✅ number
const prodAvailable = getPropertyFromObj(product, "available"); // ✅ boolean

console.log({ prodName, prodPrice, prodAvailable });

// ===========================================================
// ✅ ৫️⃣ keyof + typeof — একসাথে কিভাবে কাজ করে?
// ===========================================================

/*
typeof দিয়ে আমরা কোনো object-এর টাইপ ধরতে পারি।
তারপর সেই টাইপের ওপর keyof ব্যবহার করে তার key গুলো বের করতে পারি।

এটা খুব কাজে লাগে dynamic object থেকে key বের করতে।
*/

const student = {
  id: 101,
  name: "Sakib",
  department: "CSE",
};

type StudentKeys = keyof typeof student; // "id" | "name" | "department"

const myKey: StudentKeys = "department"; // ✅ valid
// const wrongKey2: StudentKeys = "age"; // ❌ Error

/*
 সহজভাবে বললে:
typeof ➜ object এর টাইপ ধরে
keyof ➜ সেই টাইপের key গুলো বের করে
*/

// ===========================================================
//  সংক্ষেপে মনে রাখো:
// ===========================================================

/*
=>  keyof = Object-এর property name গুলোর Union Type তৈরি করে
=>  keyof constraint (<T, K extends keyof T>) = শুধুমাত্র valid key গুলোকেই অনুমতি দেয়
=>  typeof + keyof = runtime object থেকে key type dynamically বের করার উপায়
=>  এই combination তোমাকে দেয় Type-safe dynamic programming এর ক্ষমতা 💪
=> 

// ===========================================================
//  END — keyof & keyof Constraint 
// ===========================================================
*/

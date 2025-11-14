// 1. Generic Array 2. Generic Tuple 3. Generic Array of Objects

// =====================================================
// ✅ Generics in TypeScript :
// =====================================================

/*
Generics: TypeScript এ একটি feature যা function, class, interface ইত্যাদিকে
flexible রাখে। মানে, টাইপ আগে থেকে নির্দিষ্ট না করে ব্যবহারকারীর
প্রয়োজন অনুযায়ী টাইপ নিতে দেয়।
*/

/* -----------------------------
1️. Generic Array
----------------------------- */

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

//const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

//const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];

/* -----------------------------
2️. Generic Tuple (Type Alias)
----------------------------- */

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<string, number> = ["Tareq", 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

/*
Step-by-step summary:
1. <T> হলো placeholder, মানে "যেকোনো type"
2. Function/Array/Tuple/Interface এ ব্যবহার করা যায়
3. Input এবং output একই type হবে
4. Reusable ও flexible কোড তৈরিতে সহায়ক
*/

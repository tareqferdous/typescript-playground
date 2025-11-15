//  Enum in TypeScript
// ===============================================
//  Enum (Enumeration) কী?
// ===============================================
/*
Enum মানে হলো — “নির্দিষ্ট মানগুলোর তালিকা”।

=> : আমরা Enum ব্যবহার করি তখন,
যখন কোনো ভ্যালু কিছু নির্দিষ্ট অপশন বা মানের মধ্যেই সীমাবদ্ধ থাকবে।

==> উদাহরণ:
ধরো, কোনো ইউজারের Role শুধুমাত্র নিচের ৩টার একটি হতে পারবে:
  - Admin
  - Editor
  - Viewer

তাহলে Enum হলো — এই নির্দিষ্ট তিনটি মানের একটা “নাম দেওয়া সেট”।
*/

// ===============================================
// 🔹 ধরো আমরা একটা User System বানাচ্ছি।
// ===============================================
// প্রতিটা ইউজারের একটি নির্দিষ্ট role থাকবে:
// "Admin" | "Editor" | "Viewer"

// =====================================================
// ==> : Enum ছাড়া (type দিয়ে লেখা সংস্করণ)
// =====================================================

/*
এখানে আমরা Type Union ব্যবহার করছি নির্দিষ্ট মানগুলোর জন্য।
*/

type UserRoleType = "Admin" | "Editor" | "Viewer";

const checkAccessByType = (role: UserRoleType) => {
  if (role === "Admin") return " Full Access Granted!";
  if (role === "Editor") return " Limited Access Granted!";
  return "View Only Access!";
};

// ✅ কাজ করবে
console.log(checkAccessByType("Admin"));

// ==>: Error: Type '"admni"' is not assignable to parameter of type 'UserRoleType'
// console.log(checkAccessByType("admni"));

/*
Enum তখন কাজে লাগে যখন মানগুলোর তালিকা নির্দিষ্ট ও সীমিত।
এখানে আমরা Enum দিয়ে সেই একই কাজ করব।
*/

enum UserRoleEnum {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const checkAccessByEnum = (role: UserRoleEnum) => {
  if (role === UserRoleEnum.Admin) return "🔑 Full Access Granted!";
  if (role === UserRoleEnum.Editor) return "🛠️ Limited Access Granted!";
  return " View Only Access!";
};

// ✅ কাজ করবে
console.log(checkAccessByEnum(UserRoleEnum.Admin));

// ❌ Error: Argument of type '"Admin"' is not assignable to parameter of type 'UserRoleEnum'
// console.log(checkAccessByEnum("Admin"));

/*
✅ Enum ব্যবহারের সুবিধা:
----------------------------------
1️. Type-Safe — ভুল মান দিলে TypeScript সরাসরি Error দেখাবে।
2️. Centralized — একবার Enum declare করলে যেকোনো জায়গায় import করে ব্যবহার করা যায়।
3️. Auto-Complete — IDE (VS Code) Enum মানগুলো সাজেস্ট করে।
4️. Maintainable — বড় প্রজেক্টে structure পরিষ্কার ও সহজে ব্যবস্থাপনাযোগ্য।
5. key and value হিসাবে ব্যবেয়াহার করা যায় 

❌ Enum-এর ছোট অসুবিধা:
----------------------------------
- Type union এর তুলনায় সামান্য বেশি কোড লাগে।
- Enum declaration একটা আলাদা abstraction তৈরি করে (যদিও এটি নিরাপদ)। 
*/

// ===============================================
//  সংক্ষেপে (Summary):
// ===============================================
//
//  Type দিয়ে: সহজ, দ্রুত, ছোট প্রজেক্টে পারফেক্ট ✅
//  Enum দিয়ে: নিরাপদ, সাজানো, বড় প্রজেক্টে সেরা ✅
//
//  মনে রাখার কথা:
// যদি মানের সংখ্যা কম হয় → Type Union
// যদি মানের তালিকা বড় হয় বা অনেক জায়গায় ব্যবহৃত হয় → Enum ব্যবহার করাই শ্রেয়।

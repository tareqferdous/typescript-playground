// typescript object
var user = {
    name: "Tareq",
    age: 26,
    isStudent: false,
};
console.log("user", user);
// objects with functions
var personDetails = function (obj) {
    return "Name: ".concat(obj.name, ", Age: ").concat(obj.age, ", Is Student: ").concat(obj.isStudent ? "Yes" : "No");
};
console.log(personDetails(user));

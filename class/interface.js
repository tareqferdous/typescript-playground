var Developer = /** @class */ (function () {
    function Developer(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    Developer.prototype.introduce = function () {
        console.log("Hi, I'm ".concat(this.name, ", a ").concat(this.position, "."));
    };
    return Developer;
}());
var dev1 = new Developer("Tareq", 27, "Frontend Developer");
console.log(dev1.introduce());

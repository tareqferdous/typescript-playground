// public property will be accessible outside the class
// private property will not be accessible outside the class
// protected property will be accessible in derived classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Employee class constructor has name and age parameters inherited from Person class. thats why we didn't need to declare them again in Employee class constructor. thats why we didn't mention public or private access modifier for name and age parameters in Employee class constructor. if we did that, it would create new properties in Employee class which will shadow the inherited properties from Person class.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, position) {
        var _this = _super.call(this, name, age) || this;
        _this.position = position;
        return _this;
    }
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " is working as a ").concat(this.position, "."));
    };
    return Employee;
}(Person));
var emp1 = new Employee("Tareq", 27, "Frontend Developer");
emp1.introduce(); // parent method
emp1.work(); // child method

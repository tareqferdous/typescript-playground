// public property will be accessible outside the class
// private property will not be accessible outside the class
// protected property will be accessible in derived classes

// Employee class constructor has name and age parameters inherited from Person class. thats why we didn't need to declare them again in Employee class constructor. thats why we didn't mention public or private access modifier for name and age parameters in Employee class constructor. if we did that, it would create new properties in Employee class which will shadow the inherited properties from Person class.

class Person {
    constructor(public name: string, private age: number) {}
    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name: string, age: number, public position: string) {
        super(name, age);
    }

    work() {
        console.log(`${this.name} is working as a ${this.position}.`);
    }
}

const emp1 = new Employee("Tareq", 27, "Frontend Developer");
emp1.introduce(); // parent method
emp1.work(); // child method

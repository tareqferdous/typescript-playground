interface Person {
    name: string;
    age: number;
    introduce(): void;
}

class Developer implements Person {
    constructor(
        public name: string,
        public age: number,
        public position: string
    ) {}

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.position}.`);
    }
}

const dev1 = new Developer("Tareq", 27, "Frontend Developer");
console.log(dev1.introduce());

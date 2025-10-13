// first example

interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

const user1: User = {
    name: "Tareq",
    age: 28,
    isAdmin: true,
};

// second example with extension

interface People {
    firstName: string;
    lastName: string;
    age: number;
    fullName(): string;
}

interface Status extends People {
    isEmployed: boolean;
    isMarried?: boolean;
}

let tareq: Status = {
    firstName: "Tareq",
    lastName: "Ahmed",
    age: 28,
    isEmployed: true,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

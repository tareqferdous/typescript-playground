// typescript object

type Person = {
    name: string;
    age: number;
    isStudent?: boolean; // optional property
};

const user: Person = {
    name: "Tareq",
    age: 26,
    isStudent: false,
};

console.log("user", user);

// objects with functions

const personDetails = (obj: Person): string => {
    return `Name: ${obj.name}, Age: ${obj.age}, Is Student: ${
        obj.isStudent ? "Yes" : "No"
    }`;
};

console.log(personDetails(user));

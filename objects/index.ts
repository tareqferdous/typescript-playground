// typescript object

type Person = {
    name: string;
    age: number;
    isStudent?: boolean; // optional property
};

const user: Person = {
    name: "Tareq",
    age: 26,
};

console.log("user", user);

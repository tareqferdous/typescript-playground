// basic functions

const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
};

// function without return
const printName = (firstName: string, lastName: string): void => {
    console.log(`${firstName} ${lastName}`);
};

// printName("John", "Doe"); // Output: John Doe, but no return value

// function with optional parameter
const fullNameWithMiddle = (
    firstName: string,
    lastName: string,
    middleName?: string
): string => {
    return middleName
        ? `${firstName} ${middleName} ${lastName}`
        : `${firstName} ${lastName}`;
};

// console.log(fullNameWithMiddle("John", "Doe")); // Output: John Doe
// console.log(fullNameWithMiddle("John", "Doe", "Michael")); // Output: John Michael Doe

// function with default parameter
const fullNameWithDefault = (
    firstName: string,
    lastName: string,
    middleName: string = "A."
): string => {
    return `${firstName} ${middleName} ${lastName}`;
};
// console.log(fullNameWithDefault("John", "Doe")); // Output: John A. Doe
// console.log(fullNameWithDefault("John", "Doe", "Michael")); // Output: John Michael Doe

// function with rest parameters
const fullNameWithTitles = (
    firstName: string,
    lastName: string,
    ...titles: string[]
): string => {
    return `${titles.join(" ")} ${firstName} ${lastName}`;
};

// console.log(fullNameWithTitles("John", "Doe")); // Output: John Doe
// console.log(fullNameWithTitles("John", "Doe", "Dr.", "PhD")); // Output: Dr. PhD John Doe

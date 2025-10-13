// type narrowing
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // এখানে value -> string
    } else {
        console.log(value.toFixed(2)); // এখানে value -> number
    }
}
printValue("hello");
printValue(123.456);

function addNumbers(n1: number, n2: number) {
    return n1 + n2;
}

// Return void vs undefined
function printNumber(n1: number) {
    console.log(n1);
}

function printNumberReturn(n1: number): undefined {
    console.log(n1);
    return;
}

console.log(printNumber(addNumbers(1, 3)));

// Function as type
let addTheseNumbers: (a: number, b: number) => number
addTheseNumbers = addNumbers
printNumber(addNumbers(1, 3));


function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
    return result;
}

addAndHandle(12, 34, (result) => {
    console.log(result);
    return result; // No compilation error here, it just says that the return value will be ignored
});

// Unknown, Any, Never
// let input: unknown --> will not compile
let input: any
let username: string
input = 5
username = input

function generateError(message: string, code: number): never {
    throw {message: message, code: code};
}

generateError("Internal server error", 500);



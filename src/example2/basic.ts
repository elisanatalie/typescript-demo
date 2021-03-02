function adds(n1: number, n2: number, printResult: boolean, message: string) {
    let result = n1 + n2;
    if (printResult) {
        console.log(message + result);
    }
    return result;
}

const number1 = 5;
const number2 = 3.14;
const printResult = true;
const message = "Result is: ";

const result = adds(number1, number2, printResult, message);
console.log(result);
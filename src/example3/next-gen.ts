// Strict type checking
const aButton = document.querySelector('button')!;

function printMessage(message: string) {
    console.log('Clicked! ' + message);
}

aButton.addEventListener('click', printMessage.bind(null, "You're welcome!"));

// Arrow function
const addArrow = (a: number, b: number = 1) => a + b; //default can't be first
const printOut: (a: number | string) => void = output => console.log(output);
const bButton = document.querySelector('button')!;
if (bButton) {
    bButton.addEventListener('click', event => console.log(event));
}
printOut(addArrow(5, 2));

// Spread Operator
const hobbies = ['painting', 'cooking'];
const activeHobbies = ['hiking', 'knitting', 'singing', ...hobbies];

const child = {
    name: "Unyil",
    age: 10
}

const childCopy = {...child};

const addManyNumbers = (...numbers: number[]) => {
    return numbers.reduce((currentNumber, newNumber) => {
        return currentNumber + newNumber;
    }, 0);
}

console.log(addManyNumbers(4, 6, 8, 2.5));

// Object and array deconstruction
const [hobby1, hobby2, ...restOfHobbies] = activeHobbies // Arrays are deconstructed by positions
console.log(hobby1, hobby2, restOfHobbies);

const {name: childName, age: childAge} = child // Objects are deconstructed by keys
console.log(childName, childAge);
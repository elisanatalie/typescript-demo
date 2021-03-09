// Intersection  types
type Employee = {
    name: string
    startDate: Date
};

type Admin = {
    name: string
    privileges: string[]
};

type ElevatedEmployee = Admin & Employee;

const myEmployee: ElevatedEmployee = {
    name: "Bob",
    startDate: new Date(),
    privileges: ['root']
}

type Numeric = number | boolean;
type Combinble = number | string;
type Universal = Numeric & Combinble;

// Type guards, instance of is same like Java

// Overloads
function addCombinble(a: number, b: number): number;
function addCombinble(a: string, b: string): string;
function addCombinble(a: string, b: number): string;
function addCombinble(a: number, b: string): string;
function addCombinble(a: Combinble, b: Combinble) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printUnknownEmployee(e: UnknownEmployee) {
    console.log(e.name);
    if ('startDate' in e) {
        console.log(e.startDate);
    }
    if ('privileges' in e) {
        console.log(e.privileges);
    }
}

printUnknownEmployee(myEmployee);
printUnknownEmployee({name: 'Sally', privileges: ['create']});

// Discriminated union
interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
    switch (animal.type) {
        case "bird":
            console.log(`Moving animal at the speed of ${animal.flyingSpeed}`);
            break;
        case "horse":
            console.log(`Moving animal at the speed of ${animal.runningSpeed}`);
            break;
    }
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// Type casting
// const userInput = <HTMLInputElement> document.getElementById("user-input")
const userInput = document.getElementById("user-input") as HTMLInputElement
userInput.value = "My input";


// Index properties. Use if property names are unknown beforehand
interface ErrorHandler {
    [property: string]: string
}

const errorBag: ErrorHandler = {
    email: 'Email must be valid',
    username: 'Username must start with a capital letter'
}

// Elvis operator
console.log(errorBag?.email);
const emptyInput = '';
const theInput1 = emptyInput || 'DEFAULT';
console.log(theInput1);
const theInput2 = emptyInput ?? 'DEFAULT';
console.log(theInput2);


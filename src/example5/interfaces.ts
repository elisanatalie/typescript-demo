// Interface, same like in Java
interface Greetable {
    readonly name: string,
    readonly age: number,
    outputName?: string,  //optional

    greeting(phrase: string): void;
}

const user1: Greetable = {
    name: "Don",
    age: 45,

    greeting(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
user1.greeting('Hi, my name is');

// user1.name = "Ox"; // does not compile because of read only

// Interface as function type
interface AddFn {
    (n1: number, n2: number): number;
}

const addition: AddFn = (n1, n2) => {
    return n1 + n2;
}

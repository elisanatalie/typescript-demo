function combine(input1: number | string,
                 input2: Combinable,
                 resultConversion: 'as-number' | 'as-string') { //Union and literal type
    let result;

    if ((typeof input1 == "number" && typeof input2 == "number") || resultConversion == 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}


console.log(combine(15, 25, 'as-number'));
console.log(combine("John", " Lennon", "as-string"));
console.log(combine("15", " 25", "as-number"));

// Type alias
type User = { name: string; age: number };
type Combinable = number | string;
const u1: User = {name: 'Max', age: 30};

enum AccountRole {AUTHOR, ADMIN, READ_ONLY }

const person: { // This is an object with specific object type
    name: string;
    age: number;
    hobbies: string[]; // This is an array
    role: [number, string]; // This is a tuple
    accountRole: AccountRole;
} = {
    name: "Unyil",
    age: 7,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    accountRole: AccountRole.ADMIN
};

// Array
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// Object
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

// Tuple
person.role.push('admin');
person.role = [0, 'admin'];
console.log(person.role);

// Enum
if (person.accountRole == AccountRole.ADMIN) {
    console.log("This is an admin");
}

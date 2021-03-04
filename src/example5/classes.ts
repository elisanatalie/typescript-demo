// Class
class Department {
    private employees: string [] = [];

    constructor(private readonly id: string, private name: string) {
    }

    describe(this: Department) { // Force object copy to have the required fields
        console.log(`Department (${this.id}) : ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

const accounting = new Department('d1', 'Accounting');
console.log(accounting);
accounting.describe();
accounting.addEmployee('Tom');
accounting.addEmployee('Sally');
accounting.printEmployeeInfo();

const accountingCopy = {name: 'Dummy', employees: [], describe: accounting.describe};
console.log(accountingCopy);
// accountingCopy.describe();

// Same like Java: extends, protected, static, abstract

//Getter and Setter
class ITDepartment extends Department {

    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
    }

    get allAdmins() {
        if (!this.admins) {
            throw new Error('No Admins found')
        }
        return this.admins;
    }

    set nextAdmin(admin: string) {
        if (!admin) {
            throw new Error('Please set a value');
        }

        this.admins.push(admin);
    }

    printAllAdmins() {
        console.log(this.admins);
    }
}

const itDepartment = new ITDepartment('d2', []);
itDepartment.printAllAdmins();
console.log(itDepartment.allAdmins);
itDepartment.nextAdmin = 'Dora';
console.log(itDepartment.allAdmins);
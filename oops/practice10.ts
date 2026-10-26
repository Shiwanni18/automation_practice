class Employee {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayName() {
        console.log("Employee Name: " + this.name);
    }
}
class Developer extends Employee {
    writeCode() {
        console.log(this.name + " is writing code");
    }
}
let dev1 = new Developer("sam");
dev1.displayName();
dev1.writeCode();
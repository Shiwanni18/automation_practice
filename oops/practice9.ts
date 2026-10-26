class Employee{
    name: string;
    salary: number;
    constructor(name:string,salary:number){
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log("Employee Name: " + this.name);
        console.log("Employee Salary: " + this.salary);
    }
}
let emp1 = new Employee("Sam", 30000);
emp1.displayDetails();
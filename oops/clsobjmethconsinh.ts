class Employee{
    name:string;
    salary:number;
    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }
    display(){
        console.log(this.name);
        console.log(this.salary);
    }
}
class Developer extends Employee{
    writeCode(){
        console.log('developer writes the code');
    }
}
let dev1= new Developer("sam",30000);
dev1.display();
dev1.writeCode();

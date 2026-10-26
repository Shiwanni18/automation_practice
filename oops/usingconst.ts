class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
    }
}
let s1 = new Student("Priya", 21);
s1.display();
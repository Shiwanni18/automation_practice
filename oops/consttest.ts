class Student {
    constructor(public name: string) {}
    display() {
        console.log(this.name);
    }
}
let s1 = new Student("Priya");
s1.display();
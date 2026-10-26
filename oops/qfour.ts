class Student{
    name:string;
    marks:number;
    constructor(name:string,marks:number){
        this.name=name;
        this.marks=marks;
    }
    display(){
        console.log("student name:"+this.name);
        console.log("student mark:"+this.marks);
    }
}
let s1=new Student("sam",85);
let s2=new Student("adam",90);

s1.display();
s2.display();
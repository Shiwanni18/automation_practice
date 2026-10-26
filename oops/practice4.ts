class student{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    display(){
        console.log(this.name);
    }
}
let s1=new student('sam');
s1.display();
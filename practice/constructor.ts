class car{
    brand:string;

    constructor(brand:string){
        this.brand=brand;
    }
}
let s1=new car('bmw');
let s2=new car('toyota');
console.log(s2.brand);
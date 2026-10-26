class calculator {
    add(a:number,b:number):number{
        return a+b;
    }
    multiply(a:number,b:number):number{
        return a*b;
    }
}
let calc=new calculator();
console.log(calc.add(5,4));
console.log(calc.multiply(4,5));
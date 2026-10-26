class Animal{
    eat(){
        console.log('animals eat well');
    }
}
class Dog extends Animal{
    bark(){
        console.log('dogs bark');
    }
}
let dog1=new Dog();
dog1.eat();
dog1.bark();
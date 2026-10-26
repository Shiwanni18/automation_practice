class animal{
    eat(){
        console.log('eating');
    }
}
class Dog extends animal{
    bark(){
        console.log('barking');
    }
}
let dog=new Dog();
dog.eat();
dog.bark();
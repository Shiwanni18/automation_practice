class animal{
    eat(){
        console.log('animals eat well');
    }
}
class Dog extends animal{
    bark(){
        console.log('dog barks');
    }
}
let dog=new Dog();
dog.eat();
dog.bark();
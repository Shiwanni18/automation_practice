abstract class Animal{
    abstract sound():void;
}
class Dog extends Animal{
    sound(){
        console.log('dog barks');
    }
}
let dog=new Dog();
dog.sound();
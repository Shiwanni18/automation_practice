class Animal{
    sound(){
        console.log('animal makes a sound');
    }
}
class Dog extends Animal{
    sound(){
        console.log('dog barks');
    }
}
let dog=new Dog();
let animal=new Animal();

dog.sound();
animal.sound();
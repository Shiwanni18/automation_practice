class Animal{
    sound(){
        console.log('animals do make sound');
    }
}
class Dog extends Animal{
    sound(){
        console.log('dog barks');
    }
}
class Cat extends Animal{
    sound(){
        console.log('cat meows');
    }
}
let dog=new Dog();
let cat=new Cat();
dog.sound();
cat.sound();
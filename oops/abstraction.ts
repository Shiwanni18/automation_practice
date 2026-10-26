abstract class Vehicle{
    abstract sound():void;
}
class Car extends Vehicle{
    sound(){
        console.log('car honks');
    }
}
let car=new Car();
car.sound();
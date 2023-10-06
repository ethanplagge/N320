//essentially, JavaScript classes are templates that can be edited

class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`Welcome, ${this.name}. You are ${this.age} years old.`);
  }
}

let William = new Person('William', '21');
William.greeting();

//Extend the class
class Student extends Person{
  constructor(name,age,major,minor){
    super(name,age);
    this.major = major;
    this.minor = minor;
  }
  iceBreaker(){
    super.greeting();
    console.log(`You are majoring in ${this.major} with an interest in ${this.minor}.`);
  }
}

let Abby = new Student('Abby', 24, 'Theater', 'Biology');
Abby.iceBreaker();

//vehicle class
class Vehicle{
  constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  vInfo(){
    return `This is a ${this.year} ${this.make} ${this.model}.`;
  }
}

class Car extends Vehicle{
  constructor(doors,transmission, ...args){
    super(...args);
    this.doors = doors;
    this.transmission = transmission;
    //you can just add properties to classes that are inherent
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle{
  constructor(){
    super(...arguments);
    this.wheels = 2;
  }
  caution(){
    console.log("Buy a helmet");
  }
}

let charger = new Car(4, "automatic", "Dodge", "Charger", 2003);
console.log(charger.vInfo());
console.log(charger.transmission, charger.wheels);

let sickRide = new Motorcycle("Harley Davidson", "ES210", 2005);
console.log(sickRide.vInfo());
sickRide.caution();
/* jshint esversion: 6*/
//lets create a Car as an object.This is an object literal. This will be a template.
//Properties:
//color,make,model,hasAC
const Car = {
  color: 'green', //not a semicolon inside object! it will break it up into statements instead
  make: 'Dodge',
  model: 'Dart',
  hasAC: false, //tecnically you can type 'hasAC' in quotes as a string;
//this would not be allowed in other languages eg Python, you'd have to type as a string
paint: function(newColor){
  Car.color = newColor; //functions on objects are called methods; could also say this.color = newColor as we are talking about the car inside the object
//so, inside of the object, the word this would refer to that object and nothing else
}
};
console.log('Car: ', Car); //this will now print out Car and actual literal information about it.
//this is now data only.

//I want to fix the AC.
Car.hasAC = true; //this is shorthand syntax
console.log('Car: ', Car);
//alternatively
Car['hasAC'] = false; //this is not a preferred way of typing it; it will print out same thing as before
console.log('Car: ', Car);

//I want to check the color;
console.log('Color of Car: ', Car.color);

//Paint the Car
Car.paint('orange'); //keep it as a string
console.log('Car: ', Car);

//Fix the ac
Car.fixAC();
console.log('Car after AC fix: ', Car);

//shirt objects: 3 properties, 3 methods//one of the methods should
//modify a property such as 'paint' above
const Shirt = {
  color: 'white',
  price: '5',
  pattern: 'none',

  paint: function(tieDye){
    Shirt.color = tieDye;
  }
};
console.log('Shirt: ', Shirt);

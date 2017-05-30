/*jshint esversion: 6 */
//What are functions?
//It is a way of bundling a piece of repetitive code
//into a reusable chunk.They can modify something,
//or they can spit out.

//our first function
//function square(num){ //because we have num in the brackets, now we need additional information to run this code; hence below line
//  return num * num;
//} //this is a pure function
//const squareOfTwo = square(2); //num doesnt exist outside this function
//as variables are encased within functions; so console.log(num); would not work
//console.log('squareOfTwo: ', squareOfTwo);

//function launchTheMissiles(){
  //console.log('Launching the Missiles: ', launchTheMissiles); //notice nothing is in the brackets so no additional info is required for code to work
//} //this is bad. impure function.block it out.


//console.log('Cube of Two before: ', cube(2));  //this wont run because you have to define the cube before running
//how to assign functions to variables
const cube = function cube(num){
  return num * num * num
};
//const cubeFatArrow = (num) =>{
////  return num * num * num;
//};  this one works, but it could also be written as below
const cubeFatArrow = num => num * num * num;
console.log('Cube of 2 after: ', cube(2));
console.log('cubeFatArrow of 2: ', cubeFatArrow);
//you should always name the function in case it goes wrong

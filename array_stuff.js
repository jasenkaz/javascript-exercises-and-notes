//all about arrays

//how do i create an array?
//empty?
const empty = [];
//Numbers
const numbers = [1,2,3];
//strings
const strings = ['a', 'b', 'c']; //only strings need to be in quotes
//array of objects
const objects = [{}, {}, {}];
//array of arrays?
const arrays = [[], [], []]; //arrays are in square brackets
//the above are examples of creatig arrays using the array literal syntax

//how many elements(things)are in the array
const emptyLength = empty.length;
console.log('Empty Length: ', emptyLength);
const numbersLength = numbers.length;
console.log('Numbers Length: ', numbersLength);

//how can i access an element of an array?
const firstString = strings[0];
console.log('First String: ', firstString);
const thirdObjects = objects[2];
console.log('The third object from objects: ', thirdObjects);



///how can i change an element of an array? ie making a mutated array
numbers [2] = 4;
console.log('Numbers after changing 3 to 4: ', numbers);

//how can i add elements to an array on the right hand side
console.log('strings before the push: ', strings);
strings.push('f');
console.log('strings after the push: ', strings);

//how can i combine two arrays?
const combined = numbers.concat(strings);
console.log('combined array of numbers and strings: ', combined);

//how can i find a position of an element in the array?
//warnning: numbers and strings work. objects and arrays can do weird things
const positionOfB = strings.indexOf('b');
console.log('Position of B: ', positionOfB);

const positionOfK = strings.indexOf('k');
console.log('Position of K: ', positionOfK); //if it finds the element, it will return its position
//but if B occurs more than once, you get the position of first one and not all

//what if i want a piece of an array
const lastTwoNumbers = numbers.slice(numbers.length - 2); //you can put a function in the method
console.log('The last two numbers of numbers: ', lastTwoNumbers);

//forEach - I want to iterate (start from beginning) through an array
const resultOfForEach = numbers.forEach(function logger(number, index){
  console.log('Numbers: ', number, index);
});//always name a function for what its gonna do
console.log('resultOfForEach', resultOfForEach);
//forEach challenge:
const x = [4,5,6,7,8,9];
//write a forEach statement that prints out each of the elements and its position for the array x?
const resultForEach = x.forEach(function logger(number,index){
  console.log('X: ', number, index);
})
console.log('resultForEach', resultForEach); //worked! cant use resultOfForEach coz already defined so just change that; BUT you can use terms
//that are in brackets, so i can use number, index, logger etc; can also just start with x.forEach


//map - I want to get a new array with changes to each element of the original
const stringLengths = strings.map(function lengthGetter(string, index){
  return string.length; //return means spit out
});
console.log('stringLengths: ', stringLengths);
//map challenge:::
const y = ['I', 'like', 'cheese', '?'];//write the answer below to get an array oflengths of the strings
//contained in the y array?
const yLengths = y.map(function lengthGetter(string, index){
  return string.length;
}) //just replace string with y, coz we defined array as y; originally i had it as string.map and it gave me 1,1,1,1 (see in git)
console.log('yLengths: ', yLengths);


//filter - I want only certain elements of an array that pass a test
const lengthOfOneStrings = y.filter(function test(string, index){
  return string.length === 1; //<=this is the test!
});
console.log('lengthOfOneStrings: ', lengthOfOneStrings); //you will only get the strings that are a Length of 1, so I and ?
//filter challenge:use a filter statement and the y array
const stringsWithLengthBiggerThanOne = y.filter(function test(string, index){
  return string.length > 1;
});
console.log('stringsWithLengthBiggerThanOne: ', stringsWithLengthBiggerThanOne); ///this worked hell yeh


//reduce - i want to take an array to something simpler
const sumOfNumbers = numbers.reduce(function adder(acc, next){console.log('acc: ', acc, 'next: ', next);
  return acc + next;
}, 0);
console.log('sumOfNumbers: ', sumOfNumbers); //acc is accumulator, it changes; next is the next thing added;
//0 is the initial acc value that everything is being added to

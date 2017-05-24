//This is all about strings
const aString = "The quick brown fox jumped over the moon";

//what is the lenght of the string?

const stringLength = aString.length; //this is property acces, ie by using a dot.something i can access the lengt property of the stringLenght
console.log('String Length: ', stringLength);//now if you type string_work.js in node, it will give you the lenght of the string

//what is the first character in teh string?
const firstChar = aString.charAt(0);//charAt is a method call
console.log('The first letter: ', firstChar);
//what is another way to find the first letter in a string?
const firstCharAnotherWay = aString[0];
console.log('The first letter another way: ', firstCharAnotherWay);
//what is the sevent letter of the string?
const seventhChar = aString[6];
console.log('The seventh letter: ', seventhChar);
//How to put two strings together??
const stringsTogether = aString.concat("!");
const stringsTogetherAgain = aString + '!';
console.log('String Together: ', stringsTogether);
console.log('String Together Again', stringsTogetherAgain);
console.log('aString:', aString);

//fact: strings are immutable. You can get new ones but you cant modify existing ones.
//i want a part of a string. how to do that?e.g. get first five characters
const firstFiveChar = aString.slice(0, 5);//end index is not included so we need index 0 to 5 instead of 0 to 4
console.log('First Five Chars: ', firstFiveChar);
//how do i split a sentence into words??
const words = aString.split(' ');
console.log('Words: ', words);


//what are the number of words in a string?
const numberOfWords = aString.split(' ').length;
console.log('Number of Words: ', numberOfWords);
//how many spaces are in a string?
const numberOfSpaces = numberOfWords - 1;
console.log('Number of Spaces: ', numberOfSpaces);
//what is the longest word in a string??
const startingWord = aString.split(' ');
const lengthOfWords = startingWords.map(word=> word.length);


//how do I reverse a string?? first split string to letters; not a space in the split on brackets below
//then reverse everything in a string by adding the reverse command at the end
const reverseString = aString.split('').reverse().join('');
console.log('Reversed String: ', reverseString);

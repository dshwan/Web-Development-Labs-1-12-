// Arrays in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// arrays can be delared explicitly
const array = [8, 9, 3, 4, 'asd'];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';
// console.log(array[10]) returns undefined if not specified prior
array[10] = 'hello';
// okay to have out of bounds; java will accomodate
console.log(array[10])

// for practice

// use forEach
array.forEach((item) => console.log(item));

// use map
const myArray = [1, 2, 3, 4];
const anotherArray2 = myArray.map((item) => item + 1);
console.log(myArray); // original is unchanged
console.log(anotherArray2); // newly created from map

// use push
anotherArray2.push(7); // adds 7
console.log(anotherArray2);
anotherArray2.pop(7); // removes 7 
console.log(anotherArray2);

// use filter
const myFilteredArray = anotherArray2.filter(item => item > 3);
console.log(myFilteredArray);
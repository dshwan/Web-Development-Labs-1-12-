// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
  // undefined
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
};

arrow('hi');

// for practice

// make an arrow function with no block body
const myArrow = name => 'Hello' + name;
console.log(myArrow(' Dylan'));

// make a function that returns a function
const myFunctionFactory = name => () => {
  console.log('Factory says ' + name);
};

const myNewFunction = myFunctionFactory('Dylan');
myNewFunction();

// callbacks
const myCallbackFunction = (callback, name) => {
  callback(name);
};

myCallbackFunction((callbackName) => {
  console.log('Hello callback' + callbackName)
}, ' Dylan');
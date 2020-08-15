// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test = 3;
var test = 3; // ok

// let, is like var, but block scoped, and not allowed to re-declare
let hello = 'world'; // Notice strings use single quotes
hello = 5; // changing the type of variable is okay, in this case string to number.
hello = [];
// let hello = 'world'; can't do this either!

// const is a constant
const iAmAConstant = 9;
// iAmAConstant = 10; can't do this!

// objects
// variables can also be objects
const obj = {}; // obj litteral

// objects can dynamically add and remove properties
obj.a = 9;
obj.b = 10;

// For Practice

// declare an object with an object as a property
const myObject = {
    a: 'hello',
    b: {
        c:{
            d: 'world',
        }
    }
};

console.log(myObject.a);
myObject.a = '4';
console.log(myObject.a);
console.log(myObject.b.c.d); // access nested objects

// hashmap
const hash = {};
hash['key'] = 'value';
console.log(hash);
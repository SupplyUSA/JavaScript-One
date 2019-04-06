/**
* This is JS doc
* @prams return
*/

//Strict mode makes it easier to write "secure" JavaScript.
//"use strict"

//immutable, global scope
const what = "JavaScript";

//array , mutable, has block scope, die right after block flished but var stay alive till the function ends.
//spread syntax
//Rest Syntax
let num = [1, 2, 2, 4, 5, 6];
console.log([...new Set(num)]); 


//Functional Programming
//Functional Programming is a form of programming in which you can pass functions as parameters to other functions and also return them as values.

//First-Class Functions
//JavaScript treats functions as first-class citizens. JavaScript functions are first-class functions meaning functions and objects are treated as the same thing. Functions can be stored as a variable inside an object or an array as well as it can be passed as an argument or be returned by another function. That makes function "first-class citizens in JavaScript"

//Higher-Order Functions
//A Higher-Order function is a function that receives a function as an argument or returns the function as output.

//pure function, function purity
//A pure function will not cause side effects. A side effect is any change in the system that is observable to the outside world.

//Destructuring assignment
//The two most used data structures in JavaScript are Object and Array.
//Objects allow us to pack many pieces of information into a single entity and arrays allow us to store ordered collections. So we can make an object or an array and handle it as a single entity, or maybe pass it to a function call.
//Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes they are more convenient.

var f2  = function(){ //function expresion
    var p = 3;
    var f1 = function(){ 
        var q = 2; ////local scope
        return p + q;
    }
    return f1;
}();
console.dir(f2); //Closure

const elm = document.querySelector('#table');
const elementList = elm.querySelectorAll('.header');
const tableId = document.getElementById('table');
document.getElementById("table").classList.add("mystyle");

//setTimeout
setTimeout(function() {
		
}, 1000);


//This will return [3,4,5]. The original array is affected resulting in array being [1,2].
//splice
var array=[1,2,3,4,5];
console.log(array.splice(2));

//This will return 3,4,5. The original array is NOT affected with resulting in array being [1,2,3,4,5].
//slice
var array2=[1,2,3,4,5]
console.log(array2.slice(2));

console.log("----after-----");
console.log(array);
console.log(array2);



//cookie, sessionStorage and localStorage

//Latest ECMAScript standard seven data types
//6 primitive types in javascript + Object
//SSNN-BU (String, Symbol, Null, Number, Boolean, Undefined) 
var n = null;
var s = "string";
var a; //undefined
var b = true;
var num = 123;
var sym1 = Symbol('foo'); //must be unique

// Object
var x = {firstName:"John", lastName:"Doe"};

//Arrow Function () => {}
var x = () => {} 

//What language constructions do you use for iterating over object properties and array items?
//for in loop
//for of loop

//Array.forEach()
//Array.map()

//call apply bind
// == and ===

//var insurancePremium = age > 21 ? 100 : 200;

//event Loop - call stack - task queue
//event Delegation
//event Capture
//event Bubble

//curry function
//higher-order
//destructuring an object or an array

//ES6 Template Literals
//Share code between files - https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac

//Asynchronous 
//Synchronous 

//this, object, constructors, prototype, inheritance, Closure, Hoisting, scope, 

//function Declaration
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

//Semicolons are used to separate executable JavaScript statements.
//Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

//The JavaScript prototype property allows you to add new properties to object constructors:
Person.prototype.nationality = "English";

//prototypal inheritance
//The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};



//Promise
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
//https://scotch.io/tutorials/javascript-promises-for-dummies

//A Promise in short:
//"Imagine you are a kid. Your mom promises you that she'll get you a new phone next week."
//You don't know if you will get that phone until next week. Your mom can either really buy you a brand new phone, or stand you up and withhold the phone if she is not happy :(.

//that is a promise. A promise has 3 states. They are:

//Pending: You don't know if you will get that phone
//Fulfilled: Mom is happy, she buys you a brand new phone
//Rejected: Your mom is happy, she withholds the phone

// an immediately resolved promise
var p2 = Promise.resolve("foo"); 
p2.then(() => {
	console.log("test")
});

// can get it after the fact, unlike events
p2.then((res) => console.log(res)); 

var p = new Promise(function(resolve, reject) {  
   setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {  
  res += 2;  
  console.log(res);
});

// still gets 4
p.then((res) => console.log(res));  
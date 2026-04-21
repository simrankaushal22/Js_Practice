let createHelloWorld = function () {
  return function (...args) {
    return "hello world";
  };
};
const f = createHelloWorld();
console.log(f());

function outer() {
  let name = "Rahul";

  function inner() {
    console.log(name);
  }
  //JavaScript keeps name in memory because inner() still needs it.
  return inner;
}

const myFunc = outer();
myFunc();

//Closures  Does not destroy variables immediately
// Keeps them if they are still being used






// Given an integer n, return a counter function. This counter function returns n on the first call, and returns 1
// more than the previous value every subsequent call.

const createfun = function (n) {
  return function () {
    n++;
    return n;
  };
};
const create = createfun(5);
console.log(create());
console.log(create());
console.log(create());

// Write a function createHelloWorld. It should return a new function that always returns 'Hello World'.

const HelloWorld = () => {
  return function () {
    return "hello word";
  };
};
const fun = HelloWorld();
console.log(fun());

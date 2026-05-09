// 1.Create an anonymous function and assign it toa variable
let abc = function () {
  console.log("Hello");
};

// 2.Create an anonymous function that prints"Hello" using a variable.
abc = function () {
  console.log("Hello");
};
abc();

// 3.Create an anonymous function that adds twonumbers and returns the result
const sum = function (x, y) {
  return x + y;
};
console.log(sum(23, 31));

// 4.Call an anonymous function stored in a variable and print the output.

console.log(sum(56, 89));

// 5.Pass an anonymous function inside setTimeout().
setTimeout(function () {
  console.log("Printing hello");
});

// 6.Use setTimeout() with an anonymous functionto print a message after 2 seconds.
setTimeout(function () {
  console.log("message is printing after 2 seconds");
}, 2000);

// 7.Create an Immediately Invoked Function(IIFE) using an anonymous function.
(function () {
  console.log("I'm an Immediately Invoked Function");
})();

// 8.Write an IIFE that prints a message instantly.
(function () {
  console.log("instantly");
})();

// 9.Create an anonymous function and store it in a variable, then call it multiple times.
let greet = (function () {
  console.log("Hello, How are you");
})();
console.log(greet);

// 10. Pass an anonymous function as a callback inside another function.
let sum2 = (a, b) => {
  console.log(a + b);
  console.log(sum); // callback function
};
sum2(20, 30);

// 11. Create an anonymous function that:
// • takes parameters
// • returns a value
let params = function (x) {
  return x;
};
console.log(params(88));

// 12.Write a program that demonstrates:
// • anonymous function in variable
// • anonymous function in callback
// • anonymous function as IIFE

//anonymous function in variable
const anonymousFunction = function () {
  console.log("Hello , How are you Doing");
};
console.log(anonymousFunction);

//anonymous function as IIFE
(function () {
  console.log("OK, BYE BYE!!");
})();

// anonymous function in callback
console.log(anonymousFunction());

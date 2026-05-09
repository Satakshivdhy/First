// 1. Enable "use strict" and declare a variable using var, then print it.
"use strict";
{
  var a = 20;
  console.log(a); // 20
}

// 2. Enable "use strict" and try using a variable without declaration.
{
    b = 20;
    console.log(b); // error :  b is not defined
}
// 3. Enable "use strict" inside a function and use a variable without declaration.
function fun() {
  "use strict";
    n = 90; //error:  n is not defined at fun
  //   console.log(n);
}
fun();

// 4.Create a function in strict mode and log the value of this.
function sum(x, y) {
  console.log(x + y);
}
sum(90, 87);

// 5.Try to delete a variable in strict mode.
delete a;  //error
console.log(a);

// 6.Create a function with duplicate parameters in strict mode.
function sum2(a,a){  // error, Duplicate parameter name not allowed in this context
    console.log(a+a);

}
sum2(30,30);

// 7.Use an octal number (starting with 0) in strict mode.
let octalnum = 0102321; //Octal literals are not allowed in strict mode.

// 8.Try to declare a variable using a reserved keyword like eval in strict mode.

let eval = "evaluate"; // error :- Unexpected eval or arguments in strict mode

// 9.Create two programs (with and without strict mode) and compare undeclared variable behavior.
function compare() {
  "use strict";
  console.log(x); //undefined
  var x = 30;
  console.log(y);//error
  let y = 80;
  console.log(z); //error
  var z = 70;
}
compare();

function compare2() {
  console.log(x); // undefined
  var x = 30;
  console.log(y);//error
  let y = 80;
  console.log(z); //error
  var z = 70;
}
compare2();

// result :- undeclared variables are behaving same in both with and without strict mode

// 10.Write a program showing undeclared variable error, duplicate parameter error, and this behavior in strict mode.behavior in strict mode..

// already showed undeclared variable error, duplicate parameter error
// now only shoing this behaviour in strict mode

function show() {
  console.log(this); // undefined
}
show();

// this behavoiur without strict mode (output):- Window {window: Window, self: Window, document: document, name: '', location: Location, …}
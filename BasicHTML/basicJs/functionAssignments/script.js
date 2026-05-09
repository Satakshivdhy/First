// 1.Create a simple function that prints "HelloWorld".
function fn() {
  console.log("Hello World");
}
fn();

// 2.Write a function that displays your name inthe console.
function name() {
  console.log("Hello, My name is Satakhi Vaidhy!!");
}
name();

// 3.Create a function that prints "Welcome toCollege".
function clgname() {
  console.log("Welcome to College");
}
clgname();

// 4.Write a function that takes a name as a parameter and prints "Hello [name]".
function nme(name) {
  console.log("Hello" + " " + name);
}
nme("Satakshi");

// 5.Create a function that takes two numbers andprints their sum.
function sum(a, b) {
  console.log(a + b);
}
sum(10, 20);

// 6.Write a function that takes a number andprints its square.
function num(a) {
  console.log(a ** 2);
}
num(12);

// 7.Create a function that takes two numbers andreturns their addition.
function addition(a, b) {
  return a + b;
}
console.log(addition(20, 15));

// 8.Write a function that returns themultiplication of two numbers.
function multiple(a, b) {
  return a * b;
}
console.log(multiple(12, 4));

// 9.Create a function that takes a name and ageand prints a message.
function details(name, age) {
  console.log("name is : " + name);
  console.log("age is : " + age);
}
details("Satakshi", 21);

// 10.Write a function that returns the average ofthree numbers.
function average() {
  let a = 20;
  let b = 18;
  let c = 30;
  let avg = (a + b + c) / 3;
  console.log("The average of three numbers: " + avg);
}
average();

// 11. Create a function and call it multiple times with different values.
function fun(a, b) {
  console.log("Sum: " + (a + b));
}
fun(12, 30);

fun(90, 55);

fun(87, 12);

fun("Hello", " World");

// 12. Build a function that takes two numbers andreturns the greater number.
function compare() {
  let a = 60;
  let b = 29;
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(compare());

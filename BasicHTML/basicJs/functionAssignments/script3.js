// 1.Create an arrow function that prints “Welcometo JavaScript”.
let greet = () => {
  console.log("Welcome to Javascript");
};
greet();

// 2.Write an arrow function that takes a name andprints a greeting message.
greet = (name) => {
  console.log("Welcome " + name + " !!");
};
greet("Satakshi");

// 3.Create an arrow function that adds twonumbers and returns the result.
const sum = (x, y) => {
  console.log("Sum: " + (x + y));
};
sum(21, 32);

// 4.Write an arrow function that multiplies two numbers and prints the output.
const multiple = (x, y) => {
  console.log("Multiplies: " + x * y);
};
multiple(12, 10);

// 5.Create an arrow function that returns the square of a number.
const square = (x) => console.log("Square: " + x ** 2);
square(20);

// 6.Write an arrow function that takes three numbers and returns their sum
const addition = () => {
  let a = 20;
  let b = 30;
  let c = 50;
  let sum = a + b + c;
  return sum;
};
console.log("Sum of three numbers : " + addition());

// 7.Create an arrow function that returnsthe length of a given string.
const str = (x) => console.log(x.length);
str("Satakshi");

// 8.Create an arrow function that checks whether anumber is positive or negative.
const check = (x) => {
  console.log("Number is " + x);

  if (x > 0) {
    console.log(x + " is Positive");
  } else {
    console.log(x + " is negative");
  }
};
check(-90);

// 9.Write an arrow function that finds thedifference between two numbers.
const diff = (x, y) => console.log(x - y);
diff(30, 67);

// 10.Create an arrow function that returns amessage like “Learning Arrow Functions”.the average of three numbers.
const average =(a,b,c)=>{
    
    let avg = (a+b+c)/3;
    return avg;
};
let m=average(20,30,80)
console.log(m);
//
const message =()=> "Learning Arrow Functions ";
console.log(message());



// 1.Declare a global variable and print it.
let a = "hello,I'm a global variable";
console.log(a);

// 2.Declare a global variable and access it inside a function.
const fun = function () {
  console.log(a);
};
fun();

// 3.Create a function and declare a local variableusing var, then print it inside the function.
const fun2 = function () {
  let a1 = "Hello, mai hu ek local variable";
  console.log(a1);
};
fun2();

// 4.Try to access a local variable outside the function and observe the error.
// console.log(a1);
// this is the error occured :- script.js:19 Uncaught ReferenceError: a1 is not defined at script.js:19:13

// 5.Create a function and declare a variable inside an if block using let, then print it inside the block.
let fun3 = function (x) {
  if (x > 10) {
    let f = "local variable";
    console.log(f);
  }
};
fun3(20);

//6.Try to access the let variable outside the block and observe the error.
fun3 = function (x) {
  if (x > 10) {
    let f = "local variable";
    console.log(f);
  }
  //   console.log(f); //Uncaught ReferenceError: f is not defined at fun3 (script.js:38:15) at script.js:40:1
};
fun3(20);

// 7.Declare a variable using const inside a block and print it inside the block.
const fun4 = function () {
  const num = 90;
  console.log(num); //o/p :- 90
};
fun4();

// 8.Try to access the const variable outside theblock and observe the error.
let m = 100;
const fun5 = function () {
  let val = 90;
  console.log(m);
};
fun5();
// console.log(val); // o/p :- script.js:56 Uncaught ReferenceError: val is not defined at script.js:56:13

// 9.Create a program with:
// • one global variable
// • one local variable
// • one block variable
// and print them where accessible.

function school() {
  console.log("Welcome to the school");
  let schoolNotice = "Imp announcement for the school";
  {
    let teachersDiscussion = "Tommorow is Mitesh sir's bithday";
    {
      let studentDiscussion =
        "Guys tomorrow is Mitesh sir's birthday , so let's plan something special for him.";
      console.log(studentDiscussion);
      console.log(teachersDiscussion);
      console.log(schoolNotice);
    }
    console.log(teachersDiscussion);
    console.log(schoolNotice);
    // console.log(studentDiscussion);     //Uncaught ReferenceError: studentDiscussion is not defined at school (script.js:79:17) at script.js:85:1
  }
  console.log(schoolNotice);
  // console.log(studentDiscussion); //error
  // console.log(teachersDiscussion); //error
}
school();

// 10. Write a program to demonstrate:
// • var works inside entire function
// • let and const work only inside block { }

function demo1() {
  {
    var nme = "Satakshi Vaidhy";
    let dob = "12-11-2004";
    const school = "Vaidik Convent School";
    console.log(dob);
    console.log(school);
  }
  console.log(nme);
}
demo1();



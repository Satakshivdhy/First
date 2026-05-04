// Sum of two numbers

// function sum(a,b){
//     console.log(a+b);

// }
// sum(10,20)

let a = 20,
  b = 30;
function sum(x, y) {
  let z = x + y;
  console.log(z);
}
sum(a, b);

// Function Expression
let abc = function () {
  console.log("Hello World");
};
console.log(abc); // poora function aa rha hai
abc() //lekin ab sirf hello world aa rha hai

let man = function(a){
    return a;
}

console.log(man);
console.log(man()); // o/p "undefined"
let van = function(a,b){
    return a+b;
}

console.log(van);
console.log(van()); // o/p NaN

const addarrow = (a,b) =>{
    return a+b;
}
console.log(addarrow(6,5));

// or
const addarrow = (a,b) => a+b;
console.log(addarrow(6,5));




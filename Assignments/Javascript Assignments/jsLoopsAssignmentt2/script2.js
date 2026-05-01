// 1.Write a program to print numbers from 1 to 5 using a while loop.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 2.Write a program to print numbers from 5 to 1
// using a while loop.

let x = 5;
while (x > 0) {
  console.log(x);
  x--;
}

//3.Write a program to print numbers starting from 2 and keep adding 2 while the number becomes less than 11.

i = 2;
while (i < 11) {
  console.log(i);
  i += 2;
}

//4.Write a program to calculate the sum of numbers from 10 to 5 using a while loop.

// i=10;
// while(i>=5){
//     i = i+(i-1)

// }

// 5.Create a while loop and explain the role of initialization, condition, and increment in it.
// 6.Write a loop and trace its execution step-bystep (initialization → condition → work → update → repeat).

i = 0; //the initializer , it initializes the value with a perticular number
while (i < 5) {
  console.log(i);   // working (here the logic works)
  i++;              // increment of i by 1 
}
// execution:- initialized i with 0, applied condition
// (i<5), means iterate until i becomes 5,  "console.log(i);" printing output in the console 
// and i++ means increasing i by one , then condition checks and iterations works , body runs and when the condition is false, the loop stops

// 6.Write a loop and trace its execution step-bystep (initialization → condition → work → 

// 7.Create a loop where the condition is false at the beginning and explain what happens.

i=5;
while(i<2){   // here condition is false in the begining so it not going inside the body, means condition-> fail loop, end
    console.log(i);
    i++
}

// 8.Write a loop and explain what happens if the variable is not updated inside the loop.
// i=1;
// while(i<=10){  // the page is continuously loading 
//     console.log(i);
    
// }

// 12. Write a loop and explain how many times it will run based on the condition.
let a =1;
while(a=3){
    console.log(a);
    a++; 
}
//  o/p  1,2,3 (it will run 3 times, and in the 4th iteration the condition will fail )
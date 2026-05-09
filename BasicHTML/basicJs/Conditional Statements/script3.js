// 1.What is the purpose of switch-case in JavaScript?
// Answer: the purpose of using switch case in javascript is to select one of the multiple choices to execute

// 2.Write a program to display a drink based on user choice (1 → Tea, 2 → Coffee, 3 → Juice,default → Invalid).

let choice = 3;
switch (choice) {
  case 1:
    console.log("Tea");
    break;
  case 2:
    console.log("Coffee");
    break;
  case 3:
    console.log("Juice");
    break;
  default:
    console.log("Invalid");
}

// 3.Write a program to display the day of the week
// based on a number (1–7).
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Out of the box");
}

// 4.Write a program using switch-case with string values (like "Vanilla", "Chocolate", "Strawberry").

choice = "Vanilla";
switch (choice) {
  case "Chocolate":
    console.log("I like Chocolate flavoured cake");
    break;
  case "Vanilla":
    console.log("I like Vanilla flavoured cake");
    break;
  case "Strawberry":
    console.log("I like Strawberry flavoured cake");
    break;
  default:
    console.log("I don't like cake");
}

// 5.Write a program to show how default works when no case matches.

choice = "PineApple";
switch (choice) {
  case "Chocolate":
    console.log("I like Chocolate flavoured cake");
    break;
  case "Vanilla":
    console.log("I like Vanilla flavoured cake");
    break;
  case "Strawberry":
    console.log("I like Strawberry flavoured cake");
    break;
  default:
    console.log("I don't like cake");
}

// 6.Write a program and explain how break works in switch-case.

day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Out of the box");
}

// Explaination:- as we have selected day=1 , i.e. it is satisfying case 1 so case1 executes and break ends the whole loop it helps in smooth execution and avoid unnecesary space

// 7.Write a program and observe what happens if break is not used.

choice = 2;
switch (choice) {
  case 1:
    console.log("Tea");
  case 2:
    console.log("Coffee");
  case 3:
    console.log("Juice");
  default:
    console.log("Invalid");
}
// output:- Coffee, Juice, Invalid

// 8.Create a program that demonstrates fall-through behavior in switch-case.

choice = 2;
switch (choice) {
  case 1:
    console.log("Tea");
  case 2:
    console.log("Coffee");
  case 3:
    console.log("Juice");
  default:
    console.log("Invalid");
}
// since i've not used break here so it is showing fall though behaviour ,i.e. after the condition matches , the loop is not stopping execution

// 9.Write a program to handle menu selection (like Home, About, Contact) using switch-case.

let menu = "Home";
switch (menu) {
  case "Home":
    console.log("Welcome to home page");
    break;
  case "About":
    console.log("Welcome to about page");
    break;
  case "Contact":
    console.log("Welcome to contact page");
    break;
  default:
    console.log("Landing Page");
}

// 10. Write a program and explain how switchcase compares values (strict equality).
let val = "Satakshi";
switch (val) {
  case "satakshi":
    console.log("Strictly Equal1");
    break;
  case "SATAKSHI":
    console.log("Strictly Equal2");
    break;
  case "Satakshi":
    console.log("YES IT IS STRICTLY EQUAL");
    break;
  default:
    console.log("Strictly Equal3");
}

// 11. Write a program and trace step-by-step how matching happens in switch-case.

val = 2;
switch (val) {
  case "1":
    console.log("val no equal to '1'");
    break;
  case "2":
    console.log("val no equal to '2'");
    break;
  case 2:
    console.log("val is equal to 2,Condition Satisfied");// here the output prints and loop ends because of break(jump statement)
    break;
  default:
    console.log("default statement");
}


// 12. Write a program and explain when the default block executes.

// when all the conditions are false then default block executes

val = 2;
switch (val) {
  case "1":
    console.log("val no equal to '1'");
    break;
  case "2":
    console.log("val no equal to '2'");
    break;
  case "Rudra":
    console.log("val is equal to 'Rudra'");// here the output prints and loop ends because of break(jump statement)
    break;
  default:
    console.log("default statement executes when all the case are failed");
}
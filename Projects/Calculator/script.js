function calculate(data) {
  const equation = document.getElementById("text");

  if (data === "AC") {
    equation.innerText = "0";
    return;
  }
  if (data === "C") {
    equation.innerText = equation.innerText.slice(0, -1);
    return;
  }
  if (data === "=") {
    // equation.innerText = eval(equation.innerText);
    const EQ = equation.innerText;
    const solution = eval(EQ);
    equation.innerText = solution;
    return;
  }

  if (data === "%") {
    const EQ = equation.innerText;
    const solution = eval(EQ);
    equation.innerText = solution / 100 ;
    return;
  }
  if (equation.innerText === "0") {
    equation.innerText = data;
  } else {
    equation.innerText = equation.innerText + data; //concatination is performing here
  }
}
// document.querySelector("text")
document.addEventListener("keydown", (event) => {
  calculate(event.key);

//   if(event.key === 'Enter'){
//     calculate("=");

//   }
//   if(event.key === 'Backspace'){
//     calculate("C");
//   }
//   if(event.key === 'Delete'){
//     calculate("AC");
//   }
//   if(event.key ==="+" || event.key ==="-" || event.key ==="*" ||event.key ==="/" ){
//     calculate(event.key)
//     console.log(event.key); 
//   }
});

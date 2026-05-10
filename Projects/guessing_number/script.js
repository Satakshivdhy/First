document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let num = Math.floor(Math.random() * 10)+1;
  console.log(num);

  const inputnum = document.getElementById("guessNumber").value;
  if (inputnum === num) {
    alert("Yeppie,you gussed the correct number");
  } else if (inputnum < num) {
    alert("OOPS SORRY!! TRY GREATER NUMBER");
  } else {
    alert("OOPS SORRY!! TRY SMALLER NUMBER");
  }
});

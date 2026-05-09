// function Bulb1ON(){
//     document.getElementById("bulb1").style.backgroundColor = "Yellow";
// }
// function Bulb1OFF(){
//     document.getElementById("bulb1").style.backgroundColor = "white";
// }
// function Bulb1RED(){
//     document.getElementById("bulb1").style.backgroundColor = "Red";
// }
// function Bulb1GREEN(){
//     document.getElementById("bulb1").style.backgroundColor = "Green";
// }
// function Bulb1BLUE(){
//     document.getElementById("bulb1").style.backgroundColor = "Blue";
// }

// // for input filed
// document.getElementById("bulbColor").addEventListener("change",ChangeBulbColor);

// function ChangeBulbColor(){
//     const color = document.getElementById("bulbColor").value;
//     document.getElementById("bulb1").style.backgroundColor = color;
// }

document.getElementById("redbox").addEventListener("mouseenter", fillRedColor);
document.getElementById("redbox").addEventListener("mouseout", fillBaseColor);
document.getElementById("greenbox").addEventListener("mouseover", fillGreenColor);
document.getElementById("greenbox").addEventListener("mouseout", fillBaseColor);
document.getElementById("bluebox").addEventListener("mouseover", fillBlueColor);
document.getElementById("bluebox").addEventListener("mouseout", fillBaseColor);

function fillBaseColor() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

function fillRedColor() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function fillGreenColor() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}
function fillBlueColor() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}

addEventListener("6")
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const eleUnit = document.getElementById("electricityUnits").value;
  console.log(eleUnit);
  let unitCharge;
  let SurCharge;
  let FinalTotal;

  if (eleUnit > 0 && eleUnit <= 50) {
    unitCharge = eleUnit * 0.5;
  } else if (eleUnit > 50 && eleUnit <= 200) {
    unitCharge = 50 * 0.5 + (eleUnit - 50) * 0.75;
    // console.log((eleUnit - 50) * 0.75);
  } else if (eleUnit > 200 && eleUnit <= 450) {
    unitCharge = 50 * 0.5 + 150 * 0.75 + (eleUnit - 200) * 1.2;
    // console.log((eleUnit - 200) * 1.2);
  } else {
    unitCharge = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (eleUnit - 450) * 1.5;
    // console.log((eleUnit - 450) * 1.5);
  }
  console.log(unitCharge);

  SurCharge = unitCharge * 0.2;
  FinalTotal = unitCharge + SurCharge;
  console.log("Final Total: " + FinalTotal);
  document.getElementById("unitsUsed").innerText = eleUnit;
  document.getElementById("TotalBill").innerText = FinalTotal;
  document.getElementById("surCharge").innerText = SurCharge;
  document.getElementById("subTotal").innerHTML = unitCharge;
});

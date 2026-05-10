document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();

    const bill = document.getElementById("billAmount").value;
    console.log(bill);
    const noOfPersons = document.getElementById("persons").value;
    console.log(noOfPersons);
    const tip = document.getElementById("review").value;
    console.log(tip);

    const tipCalculated = ((bill * tip)/100)/noOfPersons;
    console.log(tipCalculated);
    
    document.getElementById("TipPerHead").innerText = tipCalculated;

    // document.getElementById("billAmount").value = "";
    // document.getElementById("persons").value = "";
    // document.getElementById("review").value = "";
      
})
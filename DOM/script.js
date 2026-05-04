function Submit() {
    console.log("Sumbit button clicked");
    
  const fn = document.getElementById("fullName").value;
  console.log(fn);

  document.getElementById("myData").innerText = fn; // innertext "html;"
  document.getElementById("fullName").value = "";
//   document.getElementById("fullName2").value = "";

  document.getElementById("dataCard").value = fn;
}

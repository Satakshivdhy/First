let Country1 = document.getElementById("country1"); //from country
let Country2 = document.getElementById("country2"); //to country

function LoadSelectOption() {
  ListOfCountries.forEach((country) => {
    const opt = document.createElement("option");
    opt.value = country.countryCode + "_" + country.currencyCode;
    opt.innerText = country.countryName;
    Country1.appendChild(opt);
  });

  ListOfCountries.forEach((country) => {
    const options = document.createElement("option");
    options.value = country.countryCode + "_" + country.currencyCode;
    options.innerText = country.countryName;
    Country2.appendChild(options);
  });
}

LoadSelectOption();


// Default selected countries
Country1.value = "US_USD";
Country2.value = "IN_INR";
FetchFlag1();
FetchFlag2();
// For Flags
async function FetchFlag1() {
  const code = Country1.value;
  console.log(code);

  const countryCode = code.split("_")[0];
  const currencyCode = code.split("_")[1];

  document.getElementById("flag1").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;
}

async function FetchFlag2() {
  const code = Country2.value;
  console.log(code);

  const countryCode = code.split("_")[0];
  const currencyCode = code.split("_")[1];

  document.getElementById("flag2").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;
}

async function convertCurrency(event) {
  event.preventDefault();
  const amount = document.getElementById("inputAmount").value; // user entered amount

  const fromCurrency = Country1.value.split("_")[1];

  const toCurrency = Country2.value.split("_")[1];

  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`,
  );

  const data = await response.json();
  console.log(data);

  if (amount.length !== 0) {
    const exchangeRate =
      data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];

    const convertedAmount = amount * exchangeRate;

    document.getElementById("newAmount").innerText =
      `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  } else {
    alert("please enter a valid anount");
  }
}

document
  .querySelector("#convertBtn")
  .addEventListener("click", convertCurrency);


document.querySelector("#swapBtn").addEventListener("click" , swapingData)

function swapingData(){
  const temp = Country1.value;
  Country1.value = Country2.value;
  Country2.value = temp;
  FetchFlag1();
  FetchFlag2();

}
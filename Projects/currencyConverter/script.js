function LoadSelectOption() {
  const Country1 = document.getElementById("country1");
  const Country2 = document.getElementById("country2");
  //   console.log(Country1);
  //   console.log(Country2);

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
//For Flags
async function FetchFlag1() {
  const code = document.getElementById("country1").value;
  console.log(code);

  const countryCode = code.split("_")[0];
  const currencyCode = code.split("_")[1];

  document.getElementById("flag1").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode.toLowerCase()}.json`,
  );
  const data = await response.json();
  console.log(data);
}

async function FetchFlag2() {
  const code = document.getElementById("country2").value;
  console.log(code);

  const countryCode = code.split("_")[0];
  const currencyCode = code.split("_")[1];

  document.getElementById("flag2").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

  
}

async function convertCurrency(event) {
    event.preventDefault();

  const amount =
    document.getElementById("inputAmount").value;

  const fromCurrency =
    document.getElementById("country1").value;

  const toCurrency =
    document.getElementById("country2").value;

  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`
  );

  const data = await response.json();

  console.log(data);

  const exchangeRate =
    data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];

  const convertedAmount =
    exchangeRate * amount;

  console.log(convertedAmount);

  document.getElementById("newAmount").innerText =
    `${convertedAmount.toFixed(2)} ${toCurrency}`;
}

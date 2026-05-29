const API_KEY = "f0f202b54b8962b1361c0a7f6a94a40b"
async function getWeather() {
  
  const cityName = document.getElementById("cityName").value.trim();

  const { Lattitude, Longitude } = await getGeoLocation(cityName);

  //   console.log({ Lattitude, Longitude });

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  console.log(data);

  const temperature = data.main.temp - 273.15;  // get temperature in celcius
  const feelsLike = data.main.feels_like - 273.15;
  const Pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const minTemp = data.main.temp_min -273.15;
  const maxTemp = data.main.temp_max - 273.15;
  const seaLevel = data.main.sea_level;
  const groundLevel = data.main.grnd_level;
  const clouds = data.clouds.all;
  // const country_Code = sys.country;
  // document.getElementById("countryCode").innerText = country_Code;

  document.getElementById("Temperature").innerText = temperature.toFixed(2);
  document.getElementById("feelsLike").innerText = feelsLike.toFixed(2);
  document.getElementById("pressure").innerText = Pressure;
  document.getElementById("humidity").innerText = humidity;
  document.getElementById("minTemp").innerText = minTemp.toFixed(2);
  document.getElementById("maxTemp").innerText = maxTemp.toFixed(2);
  document.getElementById("seaLevel").innerText = seaLevel;
  document.getElementById("groundLevel").innerText = groundLevel;
  document.getElementById("clouds").innerText = clouds;

}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

    console.log(data);

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  
return { Lattitude, Longitude };


}
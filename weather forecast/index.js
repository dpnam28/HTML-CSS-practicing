const apiKey = "26e4d5a2e695e6814d2f1e40716aa64c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const city = document.querySelector('input[name = "city"]');
const btn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(
    apiURL + `&q=${city.trim()}` + `&appid=${apiKey}`
  );
  let data = await response.json();

  if (response.status !== 200) {
    document.querySelector(".error").style = "display: block;";
    document.querySelector(".weather").style = "display: none;";
  } else {
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = data.main.temp + "°C";
    document.querySelector(".humid").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        icon.src = "./images/clouds.png";
        break;
      case "Rain":
        icon.src = "./images/rain.png";
        break;
      case "Mist":
        icon.src = "./images/mist.png";
        break;
      case "Clear":
        icon.src = "./images/clear.png";
        break;
      case "Drizzle":
        icon.src = "./images/drizzle.png";
        break;
      case "Snow":
        icon.src = "./images/snow.png";
        break;
      default:
        break;
    }
    document.querySelector(".error").style = "display: none;";
    document.querySelector(".weather").style = "display: block;";
  }
}

btn.addEventListener("click", () => {
  checkWeather(city.value);
});

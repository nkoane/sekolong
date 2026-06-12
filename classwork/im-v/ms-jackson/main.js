document.addEventListener("DOMContentLoaded", async () => {

  const form = document.getElementById("getTheCityForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); /* stops the form from being submitted */
    const city = form.city.value.trim();
    console.log("City submitted:", city, form.city.value);
    if (city) {
      await getTheWeatherDetails(null, city);
    }
  });

  // get users current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("User's location:", position.coords);
        getTheWeatherDetails(position.coords);
      },
      (error) => {
        getTheWeatherDetails();
        console.error("Error getting location:", error);
      },
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }

  /* weather stuff */
  await getTheWeatherDetails();
});

async function getTheWeatherDetails(coords, city = "Johannesburg") {
  const app = document.querySelector("main");
  const hourly = document.getElementById("hourly");
  const panel = document.getElementById("panel");

  app.classList.add("is-loading");
  app.classList.remove("is-error");

  let baseWeatherUrl = "https://api.open-meteo.com/v1/forecast?daily=sunrise,sunset&hourly=temperature_2m,rain,visibility,is_day,sunshine_duration,weather_code&timezone=Africa/Johannesburg&forecast_days=1&wind_speed_10m";
  baseWeatherUrl = "https://api.open-meteo.com/v1/forecast?daily=sunrise,sunset&hourly=temperature_2m,rain,visibility,is_day,sunshine_duration,weather_code,wind_speed_10m&timezone=Africa/Johannesburg&forecast_days=1";

  try {
    if (!coords) {
      const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
      const location = await fetch(geocodingUrl).then((response) => response.json());
      if (!location.results?.length) {
        throw new Error("City not found");
      }
      coords = { latitude: location.results[0].latitude, longitude: location.results[0].longitude };
      city = location.results[0].name;
    }

    const weatherUrl = `${baseWeatherUrl}&latitude=${coords.latitude}&longitude=${coords.longitude}`;
    const weather = await fetch(weatherUrl).then((response) => response.json());
    console.log({ weatherUrl, weather });

    const now = new Date();
    const currentHour = now.getHours();

    panel.querySelector(".city").textContent = city;
    panel.querySelector(".temperature").textContent = `${weather.hourly.temperature_2m[currentHour]}°C`;
    panel.querySelector(".time").textContent =
      new Date(weather.hourly.time[currentHour]).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    panel.querySelector(".rain").textContent = `${weather.hourly.rain[currentHour]} mm`;

    const currentRain = weather.hourly.rain[currentHour] || 0;
    app.dataset.condition = currentRain > 0 ? "rainy" : "clear";

    hourly.innerHTML = "";
    const nextIndex = weather.hourly.time.findIndex((time) => new Date(time) >= now);
    const displayIndex = nextIndex === -1 ? currentHour : nextIndex;

    const hour = new Date(weather.hourly.time[displayIndex]).getHours();
    const temp = weather.hourly.temperature_2m[displayIndex];
    const rain = weather.hourly.rain[displayIndex];
    const windSpeed = weather.hourly.wind_speed_10m[displayIndex];

    const card = document.createElement("li");
    const rainHTML = rain > 0 ? ' <img src="images/cloud-rain.svg" alt="" />' : "";
    const windHTML = ' <img src="images/wind.svg" alt="" />';
    card.innerHTML = `${hour}:00 | ${temp}°C${rain > 0 ? ` | ${rainHTML} ${rain} mm` : ""} | ${windHTML} ${windSpeed} km/h`;
    hourly.appendChild(card);
  } catch (error) {
    console.error("Could not load weather data:", error);
    app.classList.add("is-error");
    app.dataset.condition = "unknown";
    panel.querySelector(".city").textContent = "Could not find city";
    panel.querySelector(".temperature").textContent = "--°C";
    panel.querySelector(".time").textContent = "--:--";
    panel.querySelector(".rain").textContent = "-- mm";
    hourly.innerHTML = "<li>Try another city name.</li>";
  } finally {
    app.classList.remove("is-loading");
  }
}


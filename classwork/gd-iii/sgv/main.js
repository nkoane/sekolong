async function getWeather(latitude, longitude) {
    let url = 'https://api.open-meteo.com/v1/forecast?current_weather=true';
    url = `${url}&latitude=${latitude}&longitude=${longitude}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getCoords(name) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`;

    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length === 0) {
        throw new Error('No results found');
    }
    return data.results[0];
}
function getColor(value) {
    // Normalize the value to a number between 0 and 1
    const normalizedValue = value / 40;

    // Calculate the red, green, and blue components
    const red = Math.round(255 * normalizedValue);
    const green = Math.round(255 * (1 - normalizedValue));
    const blue = 255 - Math.round(255 * normalizedValue);

    // Construct the CSS color string
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}

// add event listener to the for key pressed
document.getElementById('question').addEventListener('submit', async function (event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    document.getElementById('city').setAttribute('disabled', true);
    try {
        const coords = await getCoords(city);
        const weather = await getWeather(coords.latitude, coords.longitude);
        document.querySelector('.temperature').innerHTML = weather.current_weather.temperature + '&deg;C';
        document.getElementById('temperature').style.color = getColor(weather.current_weather.temperature);
        document.querySelector('.wind-speed').innerHTML = weather.current_weather.windspeed + 'km/h';
        document.querySelector('.wind-direction').innerHTML = weather.current_weather.winddirection + '&deg;';

        document.getElementById('wind-direction').style.transform = `rotate(${weather.current_weather.winddirection}deg)`;
    } catch (error) {
        console.log(error);
    }

    // console.log(city, weather.current_weather);
    document.getElementById('city').removeAttribute('disabled');
    this.reset();

    //document.getElementById('question').reset();
});

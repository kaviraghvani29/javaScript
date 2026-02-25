async function getWeather() {

    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    let apiKey = "dcabd27ea76625fd884f98d3d0172c55";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod == 404) {
            document.getElementById("output").innerHTML = "City not found ❌";
            return;
        }

        document.getElementById("output").innerHTML = `
            <h3>${data.name}</h3>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].main}</p>
            <p>💨 Wind: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        console.log(error);
        document.getElementById("output").innerHTML = "Error fetching data!";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("location");
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const weatherInfo = document.getElementById("weatherInfo");
  
    getWeatherBtn.addEventListener("click", getWeather);
  
    function getWeather() {
      const location = locationInput.value;
      if (location.trim() === "") {
        alert("Voer een locatie in.");
        return;
      }
  
      const apiKey = "JOUW_OPENWEATHERMAP_API_KEY"; // Vervang met jouw OpenWeatherMap API-sleutel
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Locatie niet gevonden.");
          }
          return response.json();
        })
        .then((data) => {
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const description = data.weather[0].description;
  
          weatherInfo.innerHTML = `
            <h2>Weer in ${location}</h2>
            <p>Temperatuur: ${temperature}°C</p>
            <p>Luchtvochtigheid: ${humidity}%</p>
            <p>Beschrijving: ${description}</p>
          `;
        })
        .catch((error) => {
          weatherInfo.innerHTML = `<p>Fout: ${error.message}</p>`;
        });
    }
  });
  
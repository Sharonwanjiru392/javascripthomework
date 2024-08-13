
    // Update local time every second
    setInterval(updateLocalTime, 1000);
    updateLocalTime(); // Initial call to display time immediately
  //weather
  // Weather Temperature Conversion
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahr');
  const weatherInfo = document.getElementById('weather');
  const currentTemperature = { celsius: 20, fahrenheit: 68 };

  function updateWeatherInfo() {
    weatherInfo.textContent = celsiusInput.checked ? 
      `Temperature: ${currentTemperature.celsius}°C` : 
      `Temperature: ${currentTemperature.fahrenheit}K`;
  }

  celsiusInput.addEventListener('change', updateWeatherInfo);
  fahrenheitInput.addEventListener('change', updateWeatherInfo);

  
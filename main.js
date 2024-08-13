document.addEventListener('DOMContentLoaded', function () {
  // Navigation Menu Toggle  
  const openNavMenuButton = document.getElementById('open-nav-menu');
  const closeNavMenuButton = document.getElementById('close-nav-menu');
  const navMenuWrapper = document.querySelector('.wrapper');

  openNavMenuButton.addEventListener('click', function () {
    navMenuWrapper.classList.add('nav-open');
  });

  closeNavMenuButton.addEventListener('click', function () {
    navMenuWrapper.classList.remove('nav-open');
  });
  /* time or let say clock*/  //javascript this is a headache
  function updateLocalTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.querySelector('[data-time="hours"]').textContent = hours;
    document.querySelector('[data-time="minutes"]').textContent = minutes;
    document.querySelector('[data-time="seconds"]').textContent = seconds;
  }

  // Update local time every second
  setInterval(updateLocalTime, 1000);
  updateLocalTime();

  //gallery part
  const images = [
    { src: 'assets/gallery/image1.jpg', alt: 'Image 1' },
    { src: 'assets/gallery/image2.jpg', alt: 'Image 2' },
    { src: 'assets/gallery/image3.jpg', alt: 'Image 3' },
  ]
  const gallerySection = document.querySelector('.gallery-section');
  const thumbnailsSection = document.querySelector('.thumbnails');

  if (images.length > 0) {
    const mainImage = gallerySection.querySelector('img');
    mainImage.src = images[0].src;
    mainImage.alt = images[0].alt;
    images.forEach(img => {
      const thumbnail = document.createElement('img');
      thumbnail.src = img.src;
      thumbnail.alt = img.alt;
      thumbnail.addEventListener('click', () => {
        mainImage.src = img.src;
        mainImage.alt = img.alt;
      });
      thumbnailsSection.appendChild(thumbnail);
    });
  }

  //weather section
  

  // ------------------------greetings--------------
  
  
  
});
//----------------------------------------------------  // Fetch weather data (simulated) ------------------------------

// this was a headache 
document.addEventListener("DOMContentLoaded", function() {
  function fetchWeather() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          temperature: 25,
          condition: "Sunny"
        });
      }, 1000);
    });
  }
/*  Function to get the appropriate greeting based on the current time */

  function getGreeting() {
    const now = new Date();
    const hours = now.getHours();
    
    if (hours < 12) {
      return "Good Morning!";
    } else if (hours < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }

  /* Function to update the weather display  */
  function updateWeatherDisplay(data) {
    const isCelsius = celsiusRadio.checked;
    let temperatureText;
    
    if (isCelsius) {
      temperatureText = `${data.temperature}°C`;
    } else {
      const fahrenheit = (data.temperature * 9/5 + 32).toFixed(1);
      temperatureText = `${fahrenheit}°F`;
    }
    
    weatherElement.textContent = `Current temperature: ${temperatureText}, Condition: ${data.condition}`;
  }

  /*Function to update the local time display*/
  function updateLocalTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.querySelector('[data-time="hours"]').textContent = hours;
    document.querySelector('[data-time="minutes"]').textContent = minutes;
    document.querySelector('[data-time="seconds"]').textContent = seconds;
  }

  // Elements that need to be rendered
  const weatherElement = document.getElementById("weather");
  const celsiusRadio = document.getElementById("celsius");
  const fahrRadio = document.getElementById("fahr");
  const greetingElement = document.getElementById("greeting");

  // Display the greeting message
  greetingElement.textContent = getGreeting();

  // Fetch and display weather data fetch it slowly
  fetchWeather().then((data) => {
    updateWeatherDisplay(data);
  });

  // Update weather display when temperature unit changes take it slow
  function updateWeatherUnit() {
    fetchWeather().then((data) => {
      updateWeatherDisplay(data);
    });
  }

  celsiusRadio.addEventListener("change", updateWeatherUnit);
  fahrRadio.addEventListener("change", updateWeatherUnit);

  // Update local time every second and please be carefull with this
  setInterval(updateLocalTime, 1000);
  updateLocalTime(); // Initial call to display time immediately
});
//finally am done with this work



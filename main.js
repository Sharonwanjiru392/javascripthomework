//DOCUMENTATION
/*document: Refers to the entire HTML document that is currently loaded in the browser.*/
/*.addEventListener(): A method used to attach an event handler to a specific event on an element. */ 
/*The DOMContentLoaded event is commonly used to ensure that the JavaScript code runs only after the HTML content of the page is fully loaded. */
document.addEventListener('DOMContentLoaded', function() {
    // Time Update Function
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
  
      document.querySelector('span[data-time="hours"]').textContent = hours;
      document.querySelector('span[data-time="minutes"]').textContent = minutes;
      document.querySelector('span[data-time="seconds"]').textContent = seconds;
    }
  
    // Weather Placeholder (You'd typically fetch this from a weather API)
    function updateWeather() {
      // Placeholder text; replace with actual weather data retrieval logic
      const weatherElement = document.getElementById('weather');
      weatherElement.textContent = '25°C, Sunny'; // Example placeholder
    }
  
    // Initialize time and weather
    updateTime();
    updateWeather();
  
    // Update time every second
    setInterval(updateTime, 1000);
  
    // Navigation Menu Toggle
    const openNavButton = document.getElementById('open-nav-menu');
    const closeNavButton = document.getElementById('close-nav-menu');
    const navWrapper = document.querySelector('.wrapper');
  
    openNavButton.addEventListener('click', () => {
      navWrapper.classList.add('active');
    });
  
    closeNavButton.addEventListener('click', () => {
      navWrapper.classList.remove('active');
    });
  
    // Gallery Functionality
    const gallerySection = document.querySelector('.gallery-section');
    const thumbnailsSection = document.querySelector('.thumbnails');
  
    function populateGallery() {
      const images = [
        { src: 'path/to/image1.jpg', alt: 'Image 1' },
        { src: 'path/to/image2.jpg', alt: 'Image 2' },
        { src: 'path/to/image3.jpg', alt: 'Image 3' },
      ];
  
      // Example for the first image
      if (images.length > 0) {
        gallerySection.querySelector('img').src = images[0].src;
        gallerySection.querySelector('img').alt = images[0].alt;
  
        // Populate thumbnails
        images.forEach(img => {
          const thumbnail = document.createElement('img');
          thumbnail.src = img.src;
          thumbnail.alt = img.alt;
          thumbnail.addEventListener('click', () => {
            gallerySection.querySelector('img').src = img.src;
            gallerySection.querySelector('img').alt = img.alt;
          });
          thumbnailsSection.appendChild(thumbnail);
        });
      }
    }
  
    // Products Functionality
    const productsSection = document.querySelector('.products-area');
  
    function populateProducts() {
      const products = [
        { name: 'Product 1', type: 'Paid' },
        { name: 'Product 2', type: 'Paid' },
        { name: 'Product 3', type: 'Free' },
      ];
  
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.textContent = product.name;
        productsSection.appendChild(productDiv);
      });
    }
  
    // Initialize gallery and products
    populateGallery();
    populateProducts();
  
    // Temperature Conversion Functionality
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahr');
    const weatherInfo = document.getElementById('weather');
  
    // Default weather info (could be fetched from an API)
    let currentTemperature = {
      celsius: 20, // Example temperature in Celsius
      fahrenheit: 68 // Example temperature in Fahrenheit
    };
  
    function updateWeatherInfo() {
      if (celsiusInput.checked) {
        weatherInfo.textContent = `Temperature: ${currentTemperature.celsius}°C`;
      } else if (fahrenheitInput.checked) {
        weatherInfo.textContent = `Temperature: ${currentTemperature.fahrenheit}°F`;
      }
    }
  
    // Event listeners for temperature unit change
    celsiusInput.addEventListener('change', function() {
      if (celsiusInput.checked) {
        updateWeatherInfo();
      }
    });
  
    fahrenheitInput.addEventListener('change', function() {
      if (fahrenheitInput.checked) {
        updateWeatherInfo();
      }
    });
  
    // Initial weather info update
    updateWeatherInfo();
  });
  
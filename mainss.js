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
  
    // Local Time Update
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

  // Initial weather info
  updateWeatherInfo();
  //gallery
    const images = [
        { src: 'assets/gallery/image1.jpg', alt: 'Image 1' },
        { src: 'assets/gallery/image2.jpg', alt: 'Image 2' },
        { src: 'assets/gallery/image3.jpg', alt: 'Image 3' },
      ];
      const products = [
        { name: 'Product 1', type: 'Paid' },
        { name: 'Product 2', type: 'Paid' },
        { name: 'Product 3', type: 'Free' },
      ];
    
      // Populate Gallery
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
    
      // Populate Products
      const productsSection = document.querySelector('.products-area');
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.textContent = product.name;
        productsSection.appendChild(productDiv);
      });
  });
  
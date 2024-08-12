document.addEventListener('DOMContentLoaded', () => {
    // Time Update Function
    function updateTime() {
      const now = new Date();
      document.querySelector('span[data-time="hours"]').textContent = now.getHours().toString().padStart(2, '0');
      document.querySelector('span[data-time="minutes"]').textContent = now.getMinutes().toString().padStart(2, '0');
      document.querySelector('span[data-time="seconds"]').textContent = now.getSeconds().toString().padStart(2, '0');
    }
  
    // Initialize Time
    updateTime();
    setInterval(updateTime, 1000);
  
    // Navigation Menu Toggle
    document.getElementById('open-nav-menu').addEventListener('click', () => document.querySelector('.wrapper').classList.add('active'));
    document.getElementById('close-nav-menu').addEventListener('click', () => document.querySelector('.wrapper').classList.remove('active'));
  
    // Gallery and Products Data
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
  });
  
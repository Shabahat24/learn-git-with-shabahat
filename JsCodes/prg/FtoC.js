// Create a temperature converter utility using IIFE
const tempConverter = (function () {
  // Functionality will be added here
   // Helper function to round numbers to 2 decimal places
  function round(num) {
    return Math.round(num * 100) / 100;
      }
    // Return an object with our conversion functions
  return {
    celsiusToFahrenheit: function (celsius) {
      const fahrenheit = (celsius * 9) / 5 + 32;
      console.log(`${celsius}°C is ${round(fahrenheit)}°F`);
      return round(fahrenheit);
    },
    fahrenheitToCelsius: function (fahrenheit) {
      const celsius = ((fahrenheit - 32) * 5) / 9;
      console.log(`${fahrenheit}°F is ${round(celsius)}°C`);
      return round(celsius);
    },
  };  
})();
// Use the converter like this!
try {
  tempConverter.celsiusToFahrenheit(25);
  tempConverter.fahrenheitToCelsius(98.6);
} catch {
  console.error("Please read instructions carefully and try again");
}

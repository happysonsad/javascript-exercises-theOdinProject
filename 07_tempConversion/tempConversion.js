let Celsius = "";
let Fahrenheit = "";

const convertToCelsius = function convertToCelsius(Fahrenheit) {
  // Fahrenheit °F to Celsius °C Formula
  Celsius = (Fahrenheit -32) / (9 / 5);
  return Math.round(Celsius * 10) / 10;
};

const convertToFahrenheit = function convertToFahrenheit(Celsius) {
  // Celsius °C to Fahrenheit °F Formula
  Fahrenheit = Celsius * (9 / 5) +32;
  return Math.round(Fahrenheit * 10) / 10;
};

// npm test tempConversion.spec.js
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(fTemp) {
  let cTemp = Math.round(((fTemp - 32) * (5/9)) * 10) / 10;
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = Math.round((cTemp * (9/5) + 32) * 10) / 10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

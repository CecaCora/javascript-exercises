const ftoc = function (fTemp) {
  const celsius = ((fTemp - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

const ctof = function (cTemp) {
  const fahrenheit = (cTemp * 9) / 5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

module.exports = {
  ftoc,
  ctof,
};

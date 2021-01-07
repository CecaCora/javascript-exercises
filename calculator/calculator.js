function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sum(array) {
  return array.reduce((finalSum, currentSum) => finalSum + currentSum, 0);
}

function multiply(array) {
  return array.reduce((finalValue, currentValue) => finalValue * currentValue, 1);
}

function power(x, y) {
  return Math.pow(x, y);
}

function factorial(x) {
  if (x === 0 || x === 1) {
    return 1;
  }
  for (let i = x - 1; i > 1; i--) {
    x = x * i;
  }
  return x;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

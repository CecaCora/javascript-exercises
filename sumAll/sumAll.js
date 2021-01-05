const sumAll = function (int1, int2) {
  if (Number.isInteger(int1) === false || Number.isInteger(int2) === false) {
    return 'ERROR';
  } else if (int1 < 0 || int2 < 0) {
    return 'ERROR';
  } else {
    return ((int1 + int2) / 2) * (Math.abs(int2 - int1) + 1);
  }
};

module.exports = sumAll;

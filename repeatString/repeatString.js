const repeatString = function (string, amount) {
  let resultString = '';

  if (amount < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < amount; i++) {
    resultString = resultString + string;
  }

  return resultString;
};

module.exports = repeatString;

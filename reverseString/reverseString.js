const reverseString = function (string) {
  let resultString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    resultString = resultString + string[i];
  }

  return resultString;
};

module.exports = reverseString;

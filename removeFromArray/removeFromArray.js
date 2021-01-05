const removeFromArray = function (inputArray, ...inputValues) {
  resultArray = inputArray.filter((value) => !inputValues.includes(value));
  return resultArray;
};

module.exports = removeFromArray;

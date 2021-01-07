const palindromes = function (string) {
  let input = string.toLowerCase().replace(/[^a-z]/g, '');
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] !== input[input.length - i - 1]) {
      return false;
    }
  }
  return true;
};

module.exports = palindromes;

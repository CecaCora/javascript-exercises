const caesar = function (string, shift) {
  let newString = '';

  while (shift < 0) {
    shift += 26;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/i)) {
      charCode = string[i].charCodeAt(0);

      if (65 <= charCode && charCode <= 90) {
        newString += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (97 <= charCode && charCode <= 122) {
        newString += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      }
    } else {
      newString += string[i];
    }
  }

  return newString;
};

module.exports = caesar;

function maxChar(str) {
  let charObj = {};
  let maxLength = 0;
  let maxChar = "";

  for (letter of str) {
    charObj[letter] = charObj[letter] + 1 || 1;

    if (charObj[letter] > maxLength) {
      maxLength = charObj[letter];
      maxChar = letter;
    }
  }

  return maxChar;
}

console.log(maxChar("hello"));

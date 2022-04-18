// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

function caeserCipher(string, jump) {
  const alphabetsArray = "abcdefghijklmnopqrstuvwxyz".split("");

  let res = "";

  for (letter of string) {
    const currentIndex = alphabetsArray.indexOf(letter);

    if (currentIndex === -1) {
      res += letter;
      continue;
    }

    const newIndex = (currentIndex + jump) % 26;

    res += alphabetsArray[newIndex];
  }

  return res;
}

console.log(caeserCipher("gurer ner 9 qbtf!", 13));

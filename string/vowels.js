// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

function vowels(word) {
  const vowels = "aeiou".split("");
  let vowelCount = 0;

  word = word.toLowerCase().replace(" ", "");

  for (letter of word) {
    if (vowels.includes(letter)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(vowels("What"));

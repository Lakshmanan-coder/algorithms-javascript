// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function isAnagram(string1, string2) {
  string1 = string1.toLowerCase().replace(/[\W_]+/g, "");
  string2 = string2.toLowerCase().replace(/[\W_]+/g, "");

  if (string1.length !== string2.length) return false;

  const string1Charector = {};

  for (letter of string1) {
    string1Charector[letter] = string1Charector[letter] + 1 || 1;
  }

  for (letter of string2) {
    if (!string1Charector[letter]) {
      return false;
    }

    string1Charector[letter]--;
  }

  return true;
}

console.log(isAnagram("eerth!", "heert"));

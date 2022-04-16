// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

function capitalize(sentence) {
  const words = sentence.split(" ");

  let capitalized = "";

  for (word of words) {
    const otherLetters = word.slice(1).toLowerCase();
    capitalized += word[0].toUpperCase() + otherLetters + " ";
  }

  return capitalized;
}

console.log(capitalize("I'm a little tea pot"));

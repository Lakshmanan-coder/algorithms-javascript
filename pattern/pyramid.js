// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left and right side
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '####### '

function pyramid(count) {
  for (let index = 1; index <= count; index++) {
    const padding = " ".repeat(count - index);
    const hashes = "#".repeat(index * 2 - 1);
    console.log(padding + hashes + padding);
  }
}

pyramid(4);

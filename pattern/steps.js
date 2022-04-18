// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(count) {
  for (let index = 1; index <= count; index++) {
    let string = "";

    let hash = "#".repeat(index);

    let space = " ".repeat(count - index);

    string = hash + space;

    console.log(string);
  }
}

steps(4);

// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

function chunk(array, chunk) {
  let first = [];

  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    const elements = array[i];

    if (first.length < chunk) {
      first.push(elements);
      first.length === chunk - 1 && resultArray.push(first);
    } else {
      first = [];
      first.push(elements);
      i === array.length - 1 && resultArray.push(first);
    }
  }

  return resultArray;
}

function chunk2(array, chunk) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    const items = array[i];
    const last = res[res.length - 1];

    if (!last || last.length === chunk) {
      res.push([items]);
    } else {
      last.push(items);
    }
  }

  return res;
}

console.log(chunk([0, 1, 2, 3, 4, 5], 4));

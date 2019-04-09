/*
There is an array with some numbers. All numbers are equal except for one.

It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55

function findUniq(arr) {
  let leftSide = arr.splice(0, Math.floor(arr.length / 2));

  let removeLeft = [...new Set(leftSide)];
  let removeRight = [...new Set(arr)];

  console.log(leftSide);
  console.log(arr);

  console.log(removeLeft);
  console.log(removeRight);

  let len1 = removeLeft.length;
  let len2 = removeRight.length;

  console.log(len1);
  console.log(len2);

  if (len1 < len2) {
    let index = removeRight.indexOf(removeLeft[0]);
    removeRight.splice(index, 1);
    return Number(removeRight);
  } else if (len2 < len1) {
    let index = removeLeft.indexOf(removeRight[0]);
    removeLeft.splice(index, 1);
    return Number(removeLeft);
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1])) // 2
console.log(findUniq([0, 0, 0.55, 0, 0])) // 0.55
console.log(findUniq([3, 10, 3, 3, 3])) // 10
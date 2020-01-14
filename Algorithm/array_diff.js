/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]

array_diff([], [4,5]), [], "a was [], b was [4,5]"
array_diff([3,4], [3]), [4], "a was [3,4], b was [3]"
array_diff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"
*/

// First Successful Iteration
function array_diff(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a;
  } else {
    let result = a.filter(number => number !== b[0]);

    for (let i = 1; i < b.length; i++) {
      result = result.filter(number => number !== b[i]);
    }

    return result;
  }
}

// Refactor of First Iteration
function array_diff_refactor(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1 });
}

console.log(array_diff([], [4, 5]))
console.log(array_diff([1, 8, 2], []))
console.log(array_diff([4, 3], [3]))
console.log(array_diff([1, 1, 4, 3, 4, 4], [4, 3]))
console.log(array_diff([5, 6, 3, 2, 8, 9, 5, 6, 7, 1, 2, 1], [5, 6, 7]))
console.log(array_diff([5, 6, 3, 2, 8, 9, 5, 6, 7, 1, 2, 1], [1, 2]))

console.log(array_diff_refactor([], [4, 5]))
console.log(array_diff_refactor([1, 8, 2], []))
console.log(array_diff_refactor([4, 3], [3]))
console.log(array_diff_refactor([1, 1, 4, 3, 4, 4], [4, 3]))
console.log(array_diff_refactor([5, 6, 3, 2, 8, 9, 5, 6, 7, 1, 2, 1], [5, 6, 7]))
console.log(array_diff_refactor([5, 6, 3, 2, 8, 9, 5, 6, 7, 1, 2, 1], [1, 2]))
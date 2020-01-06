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

function array_diff(a, b) {
  if (a.length === 0) {
    return a;
  } else if (b.length === 0) {
    return b;
  } else {
    b.forEach(function checkA(check_value) {
      for (let i = 0; i < a.length; i++) {
        if (check_value === a[i]) {
          console.log(a[check_value])
          // console.log("the same number = " + check_value)
          return "the same number = " + check_value;
        }
      }
    })
  }
}

console.log(array_diff([], [4, 5]))
console.log(array_diff([1, 8, 2], []))
console.log(array_diff([3, 4], [3]))
console.log(array_diff([1, 1, 2, 3, 4, 4], [4]))
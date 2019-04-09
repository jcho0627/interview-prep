/*
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([40, 60], 50) should return a number.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([3, 10, 5], 3) should return a number.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([5, 3, 20, 3], 5) should return a number.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 20, 10], 19) should return a number.
getIndexToIns([2, 5, 10], 15) should return 3.
getIndexToIns([2, 5, 10], 15) should return a number.
getIndexToIns([], 1) should return 0.
getIndexToIns([], 1) should return a number.
*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);

  console.log(arr);

  // arr.sort((a, b) => a > b ? 1 : 0);
  arr.sort((a, b) => a - b);

  console.log(arr);

  console.log(arr.indexOf(num));
}

getIndexToIns([10, 20, 30, 40, 50], 35);
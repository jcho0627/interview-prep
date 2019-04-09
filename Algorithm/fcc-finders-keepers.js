/*
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

function findElement(arr, func) {

  console.log(arr);

  arr = arr.filter(func);

  console.log(arr[0]);

  return arr[0];
}

findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; });
/*
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
All elements from the first array should be added to the second array in their original order.
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let len = arr2.length;
  let first = arr2.slice(0, n);
  let last = arr2.slice(n, len);
  let newArray = [];

  console.log(len);
  console.log(first);
  console.log(last);
  console.log(arr2);

  newArray = [...first, ...arr1, ...last];

  console.log(newArray);


  return newArray;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
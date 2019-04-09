function largestOfFour(arr) {
  // You can do this!
  let len = arr.length;

  let newArray = [];

  for (let i = 0; i < len; i++) {
    newArray.push(arr[i].reduce((acc, curr) => acc > curr ? acc : curr));
  }

  console.log(newArray);

  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
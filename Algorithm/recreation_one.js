/*
Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

#Examples:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]

listSquared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
listSquared(42, 250) --> [[42, 2500], [246, 84100]]
listSquared(250, 500) --> [[287, 84100]]
*/

function listSquared(m, n) {
  // your code
  let checkNumbers = []
  let divisorsM = [];
  let divisorsN = [];

  // Check which numbers to check
  for (let k = m; k < n + 1; k++) {
    checkNumbers.push(k);
  }

  // Check for divisors
  for (let i = 0; i < m + 1; i++) {
    if (m % i === 0) {
      divisorsM.push(i * i);
    }
  }

  for (let j = 0; j < n + 1; j++) {
    if (n % j === 0) {
      divisorsN.push(j * j);
    }
  }

  console.log(checkNumbers);
  console.log(divisorsM);
  console.log(divisorsN);
}

// function findDivisor(n) {
//   let divisors = [];
//   let result = [];

//   // Check for divisors
//   for (let i = 0; i < n + 1; i++) {
//     if (n % i === 0) {
//       divisors.push(i * i)
//     }
//   }

//   // Add divisors
//   let a = divisors.reduce((accumulator, currentValue) => accumulator + currentValue)

//   console.log(divisors)
//   console.log(a)
//   console.log(n)

//   // Check square root of the added divisor
//   // return (Math.sqrt(a) % 1 === 0 ? true : false)

//   if (Math.sqrt(a) % 1 === 0) {
//     result.push([n, a])

//     return result
//   } else {
//     return false;
//   }
// }

console.log(listSquared(1, 42));
/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base.In this Kata, we will restrict ourselves to decimal(base 10).

For example, take 153(3 digits):

1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
and 1634(4 digits):

1 ^ 4 + 6 ^ 4 + 3 ^ 4 + 4 ^ 4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
*/

function narcissistic(value) {
  // Code me to return true or false

  // Find out length of number
  let string = String(value);
  let len = string.length;
  let end = value;

  // Initialize final array
  let arr = [];

  // Loop for each number
  for (let i = 0; i < len; i++) {
    let digit = value % 10;
    arr.push(Math.floor(digit) ** len);
    value /= 10;
  }

  arr = arr.reduce((a, b) => a + b);

  return arr === end;
}

console.log(narcissistic(371));




/*
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
The built-in repeat()-method should not be used
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(str);
  }

  arr = arr.join("");

  console.log(arr);
  return arr;
}

repeatStringNumTimes("abc", -2);
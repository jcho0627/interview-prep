/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
*/

function towerBuilder(nFloors) {
  // build here
  let arr = [];

  for (let i = 0; i < nFloors; i++) {
    let str = "";

    for (let j = 0; j < nFloors - (i * 2); j++) {
      str = str + " ";
    }

    for (let k = 1; k < (2 * i + 2); k++) {
      str = str + "*";
    }

    for (let j = 0; j < nFloors - (i * 2); j++) {
      str = str + " ";
    }

    arr.push(str);
  }

  return arr;
}

console.log(towerBuilder(3));
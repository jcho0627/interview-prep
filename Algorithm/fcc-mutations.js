/*
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
*/

function mutation(arr) {

  // let first = arr[0];
  // let second = arr[1];
  // let result = [];

  // first = first.toString().toLowerCase().split("");
  // second = second.toString().toLowerCase().split("");

  // console.log(first);
  // console.log(second);

  // for (let i = 0; i < second.length; i++) {
  //   result.push(first.includes(second[i]));
  // }

  // console.log(result);

  // if (result.includes(false)) {
  //   result = false;
  // } else {
  //   result = true;
  // }

  // console.log(result);

  // return result;

  console.log(arr[1].toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    }));
}

mutation(["hello", "neo"]);
/*
confirmEnding("Bastian", "n") should return true.
confirmEnding("Congratulation", "on") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("Open sesame", "game") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
confirmEnding("Abstraction", "action") should return true.
Do not use the built-in method .endsWith() to solve the challenge.
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  const lenStr = str.length;
  const lenEnd = target.length;

  let splitStr = str.split("");

  splitStr = splitStr.slice((lenStr - lenEnd), lenStr);

  return splitStr.join("") === target;
}

console.log(confirmEnding("Congratulation", "on"));
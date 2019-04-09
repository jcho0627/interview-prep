function findLongestWordLength(str) {
  str = str.split(" ");

  console.log(str);

  str = str.reduce((accumulator, current) => accumulator.length > current.length ? accumulator : current);

  console.log(str);
  console.log(str.length);

  return str.length;
}

findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
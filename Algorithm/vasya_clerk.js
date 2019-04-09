test = [25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100]; // Expected "YES"

function tickets(peopleInLine) {

  let twentyFive = 0;
  let fifty = 0;
  let hundred = 0;

  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      twentyFive++;
      // console.log(twentyFive);
    } else if (peopleInLine[i] === 50 && twentyFive > 0) {
      fifty++;
      twentyFive--;
      // console.log(fifty);
      // console.log(twentyFive);
    } else if (peopleInLine[i] === 100 && fifty > 0 && twentyFive > 0) {
      hundred++;
      fifty--;
      twentyFive--;
      // console.log(twentyFive);
      // console.log(fifty);
      // console.log(hundred);
    } else if (peopleInLine[i] === 100 && twentyFive > 2) {
      hundred++;
      twentyFive -= 3;
      // console.log(twentyFive);
      // console.log(hundred);
    } else {
      return "NO";
    }
  }
  return "YES";
}

console.log(tickets(test));
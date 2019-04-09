/*
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/

function titleCase(str) {
  str = str.split(" ");
  let result = [];
  console.log(str);

  console.log(str[0])

  for (let i = 0; i < str.length; i++) {
    result.push(str[i][0].toUpperCase() + str[i].slice(1, str[i].length).toLowerCase());
  }

  result = result.join(" ");

  console.log(result);

  // return str;
}

titleCase("sHoRt AnD sToUt");
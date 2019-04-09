function factorialize(num) {
  let result = 1;
  console.log(num);

  while (num > 0) {
    result *= num;
    console.log(result);
    num--;
    console.log(num);
  }

  console.log(result);

  return result;
}

factorialize(10);
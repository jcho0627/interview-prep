function reverseString(str) {
  let split = str.split("");
  let len = split.length;
  let arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(split[len - (i + 1)]);
  }

  arr = arr.join("");

  return str;
}

reverseString("hello");
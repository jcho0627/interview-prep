const sum = (function () {
  "use strict";
  return function sum(...val) {
    // const args = [x, y, z];
    return val.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3));
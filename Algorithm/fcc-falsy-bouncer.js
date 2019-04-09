/*
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  // arr = arr.filter(element => element == true);

  console.log(arr.filter(Boolean));

  console.log(arr);

  return arr;
}

bouncer([1, null, NaN, 2, undefined]);

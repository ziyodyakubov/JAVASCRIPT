function arrayNumber(n) {
  let arr = [];

  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(arrayNumber(100));
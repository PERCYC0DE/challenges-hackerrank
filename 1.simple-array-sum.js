function sumArray(arr) {
  const initialValue = 0;
  let sumTotal = arr.reduce((prev, next) => prev + next, initialValue);
  return sumTotal;
}

console.log(sumArray([2, 4, 6, 8]));

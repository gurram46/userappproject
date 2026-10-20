function countZeroes(values) {
  return values.filter((value) => value === 0).length;
}

console.log(countZeroes([0, 1, 0, 2, 3]));

function sumEvenValues(values) {
  return values.filter((value) => value % 2 === 0).reduce((sum, value) => sum + value, 0);
}

console.log(sumEvenValues([1, 2, 3, 4]));

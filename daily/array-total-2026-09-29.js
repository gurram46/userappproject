function arrayTotal(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(arrayTotal([3, 4, 5]));

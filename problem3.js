function oddAverage(numbers) {
  let sum = 0;
  let count = 0;
  for (let num of numbers) {
    if (num % 2 == 1) {
      sum += num;
      count++;
    }
  }
  return sum / count;
}

console.log(`Average: ${oddAverage([32, 43, 3, 45, 6, 45, 65, 9])}`);

function numberFinder(array, find) {
  let count = 0;
  for (let arr of array) {
    if (arr == find) {
      count++;
    }
  }
  return count;
}

let numbers = [5, 6, 11, 12, 98, 5];
console.log(numberFinder(numbers, 5));

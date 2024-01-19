function findAverage(array) {
  let sumAverage = 0;
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
	sum += array[index];
    sumAverage = sum / array.length;
  }
  return sumAverage;
}
console.log(findAverage([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
findAverage = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

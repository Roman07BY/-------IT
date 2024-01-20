const sumArrays = (array1, array2) => {
  let sum = 0;
  for (let index = 0; index < array1.length; index++) {
    sum += array1[index] + array2[index];
  }
  return sum;
}

console.log(sumArrays([1, 4, 5, 7], [3, 6, 1, 2]));
sumArrays([1, 4, 5, 7], [3, 6, 1, 2]); // вызов функции.




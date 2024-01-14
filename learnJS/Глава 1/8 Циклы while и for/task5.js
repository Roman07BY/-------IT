let sum = 0;
const ArrayOfNumbers = [1, 2, -3, -4, -5, -6, -7, 8, 9, -10];
for (let index = 0; index < ArrayOfNumbers.length; index++) {
  if (ArrayOfNumbers[index] > 0) {
    sum += ArrayOfNumbers[index] ** 2;
  }
}
console.log(`${sum}`);

//задача на поиск положительных элементов в массиве возведение их в квадрат и нахождение ех суммы квадратов

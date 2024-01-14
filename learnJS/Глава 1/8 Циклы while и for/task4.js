let sum = 0;
const ArrayOfNumbers = [1, 2, -3, -4, -5, -6, -7, 8, 9, -10];
for (let index = 0; index < ArrayOfNumbers.length; index++) {
  if (ArrayOfNumbers[index] % 2 == 0 && ArrayOfNumbers[index] > 0) {
    sum += ArrayOfNumbers[index];
  }
}
console.log(`${sum}`);

//задача на поиск четных положительных элементов в массиве и нахождение ех суммы

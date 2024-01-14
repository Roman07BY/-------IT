//задача на поиск четных положительных элементов в массиве и нахождение ех суммы
//решение через циклы
let sum = 0;
const ArrayOfNumbers = [1, 2, -3, -4, -5, -6, -7, 8, 9, -10];
for (let index = 0; index < ArrayOfNumbers.length; index++) {
  if (ArrayOfNumbers[index] % 2 == 0 && ArrayOfNumbers[index] > 0) {
    sum += ArrayOfNumbers[index];
  }
}
console.log(`${sum}`);


//решение через функцию
const ArrayOfNumberss = [1, 2, -3, -4, -5, -6, -7, 8, 9, -10];
const sumOfPositiveNumbers = (ArrayOfNumbers) => {
  let sum = 0;
  for (let index = 0; index < ArrayOfNumberss.length; index++) {
    if (ArrayOfNumberss[index] % 2 == 0 && ArrayOfNumberss[index] > 0) {
      sum += ArrayOfNumberss[index];
    }
  }
  return sum;
}
const resultOfFN = sumOfPositiveNumbers(ArrayOfNumberss);      //вызов функции
console.log(resultOfFN);

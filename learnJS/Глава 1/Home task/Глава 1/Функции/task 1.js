const arrayOfNumbers = [1, 2, -3, -4, -5, -6, -7, 8, 9, -10];
const sumOfPositiveNumbers = (arrayOfNumbers) => {
  let sum = 0;
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (arrayOfNumbers[index] % 2 == 0 && arrayOfNumbers[index] > 0)
      sum += arrayOfNumbers[index];
  }
  return sum;
};
const resultOfFN = sumOfPositiveNumbers(arrayOfNumbers); //вызов функции
console.log(resultOfFN);

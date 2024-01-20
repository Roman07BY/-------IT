const arrayOfNumbers = [11,-4,2,2,9,-3,-10,18,18];
const squareSumOfNumbers = (ArrayOfNumbers) => {
  let sum = 0;
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (arrayOfNumbers[index] > 0) {
      sum += arrayOfNumbers[index] ** 2;
    }
  }
  return sum;
}
const resultOfSquare = squareSumOfNumbers(arrayOfNumbers); //вызов функции
console.log(resultOfSquare);


function countPositivesSumNegatives(input) {
  let countPositiveNums = 0;
  let negativeSum = 0;
  if(input === null || input.length === 0){
    return [];
    }
  for (index = 0; index < input.length; index++) {
      if (input[index] < 0) {
        negativeSum += input[index];
      }
      if (input[index] > 0) {
        countPositiveNums++;
      }  
    }
    let result = [countPositiveNums, negativeSum];
    return result;
}
console.log(countPositivesSumNegatives([2,6,7,8,9,-10,-15,-5]));
input = [2,6,7,8,9,-10,-15,-5];

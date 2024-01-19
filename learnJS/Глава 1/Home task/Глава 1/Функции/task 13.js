function countPositivesSumNegatives(input) {
  let countPositiveNums = 0;
  let negativeSum = 0;

  for (index = 0; index < input.length; index++) {
    if (input[index] < 0) {
      negativeSum += input[index];
    }
    if (input[index] > 0) {
      countPositiveNums++;
    }
	if(input.length==0){
		negativeSum = "";
		countPositiveNums = "";
	}
  }
  let result = [countPositiveNums, negativeSum];
  return result;
}

console.log(countPositivesSumNegatives([]));
input = [];

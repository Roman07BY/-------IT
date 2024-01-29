var min = function (list) {
  let minNum = list[0];
  for (let index = 0; index < list.length; index++) {
    if (list[index] < minNum) {
      minNum = list[index];
    }
  }
  return minNum;
};

var max = function (list) {
  let maxNum = list[0];
  for (let index = 0; index < list.length; index++) {
    if (list[index] > maxNum) {
      maxNum = list[index];
    }
  }
  return maxNum;
};

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

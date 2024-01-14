//задача на поиск элемента в массиве, если данный элемент присутствует вывод индекс номера
const arrayStrings = ["apple", "room", "orange", "needle", "tea", "carrot"];

//const findNeedle = (array, target) => {
//	for (let index = 0; index < array.length; index++) {
//		const element = array[index];
//		if(element === target){
//			return index;
//		}
//	}
//}
//console.log('found the needle at position', `${findNeedle(array, "needle")}`);

function findNeedle(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === "needle") {
      return `found the needle at position ${index}`;
    }
  }
}
const resultOfFN = findNeedle(arrayStrings); //вызов функции
console.log(resultOfFN);




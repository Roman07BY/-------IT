const arrayOfString= ["apple", "room", "orange", "needle", "tea", "carrot"];
function findNeedle(arrayOfString) {
	for (let index = 0; index < arrayOfString.length; index++) {
		const element = arrayOfString[index];
		if(element === 'needle'){
			return `found the needle at position ${index}`;
		}
	}
}
const resultOfString = findNeedle(arrayOfString); //вызов функции
console.log(resultOfString);
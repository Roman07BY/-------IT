//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function dayOfWeek(num) {
  switch (num) {
    case 1:
      return("Понедельник");
      break;
    case 2:
		return("Вторник");
      break;
    case 3:
		return("Среда");
      break;
    case 4:
		return("Четверг");
      break;
    case 5:
		return("Пятница");
      break;
    case 6:
		return("Суббота");
      break;
    case 7:
		return("Воскресенье");
      break;
  }
}
console.log(dayOfWeek(7));

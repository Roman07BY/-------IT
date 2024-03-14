//Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)
function nameSurnameAge(name, surname, age) {
	return `Привет ${name} ${surname} с возрастом ${age} лет`;
}
console.log(nameSurnameAge("Roman", "Markovich", "23"));
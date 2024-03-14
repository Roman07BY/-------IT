//Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

function maleOrFemale(string){
if (string == "Male"){
	return `Ваш пол Мужской`;
}
else if( string == "Female"){
	return `Ваш пол Женский`;
}
else if (string != "Male" && string != "Female"){
	return `Пол не определен`
}
}
console.log(maleOrFemale("FeMale"))
//Условие:
//Перепишите конструкцию if с использованием условного оператора '?':

//let result;

//if (a + b < 4) {
//result = 'Мало';
//} else {
//result = 'Много';
//}


let a = +prompt();
let b = +prompt();

let result = (a + b < 4) ? 'Мало' : 'Много';

alert(`${result}`);

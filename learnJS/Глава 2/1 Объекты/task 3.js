//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sumSalaries = 0;
for (let key in salaries) {
  sumSalaries += salaries[key];
}
console.log(sumSalaries);

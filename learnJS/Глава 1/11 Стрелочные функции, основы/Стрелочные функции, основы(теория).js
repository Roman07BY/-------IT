let age = 15;
let welcome = (age < 18) ? () => console.log('Привет!') : () => console.log("Здравствуйте!");
welcome();



let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
  };
  
  console.log( sum(8, 2) ); // 3
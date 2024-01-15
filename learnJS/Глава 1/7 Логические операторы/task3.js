alert('Введите логин')
let login=prompt('');
let password;
let result=login;
if (login!=('Админ'))
{
alert('Отменено');
}
else if(login=('Админ'))
{
alert('введите пароль');
password=prompt('');
if (password!=('Яглавный'))
{
alert('неверный пароль, в доступе отказано');
}
else
{
alert('Здраствуйте');
}
}

// result = value1 && value2 && value3;
// alert( 1 && 2 && null && 3 ); // null
// alert( 1 && 2 && 3 ); // 3




//if(result=('Админ') || result=(null))
//{
//    alert('введите пароль');
//    password=prompt('');
//        if (password=('Яглавный'))
//        {
//            alert('Здраствуйте');
//        }
//        else if (password=('Яглавный'))
//}


let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
alert('Введите логин')
let login=prompt('');
let password;
let result;
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


if(result= login=null && login=('') && login=('Админ'))
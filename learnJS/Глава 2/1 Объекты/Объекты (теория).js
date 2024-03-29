//let user = new Object(); // синтаксис "конструктор объекта"
//let user = {};  // синтаксис "литерал объекта"
//Обычно используют вариант с фигурными скобками {...}. Такое объявление называют литералом объекта или литеральной нотацией.

//При использовании литерального синтаксиса {...} мы сразу можем поместить в объект несколько свойств в виде пар «ключ: значение»:
//let user = {     // объект
//  name: "John",  // под ключом "name" хранится значение "John"
//  age: 30        // под ключом "age" хранится значение 30
//};
//После имени свойства следует двоеточие ":", и затем указывается значение свойства.
//получаем свойства объекта:
//alert( user.name ); // John
//alert( user.age ); // 30

//Значение может быть любого типа. Давайте добавим свойство с логическим значением:
//user.isAdmin = true;

//Для удаления свойства мы можем использовать оператор delete:
//delete user.age;

//Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
//let user = {
//  name: "John",
//  age: 30,
//  "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
//};

//Последнее свойство объекта может заканчиваться запятой:
//let user = {
//  name: "John",
//  age: 30,
//}
//Это называется «висячая запятая». Такой подход упрощает добавление, удаление и перемещение свойств, так как все строки объекта становятся одинаковыми.

//Объект, объявленный через const, может быть изменён.
//Например:
//const user = {
//  name: "John"
//};
//user.name = "Pete"; // (*)
//alert(user.name); // Pete

//Может показаться, что строка (*) должна вызвать ошибку, но нет, здесь всё в порядке. Дело в том, что объявление const защищает от изменений только саму переменную user, а не её содержимое.
//Определение const выдаст ошибку только если мы присвоим переменной другое значение: user=....

//Для свойств, имена которых состоят из нескольких слов, доступ к значению «через точку» не работает:
//Для таких случаев существует альтернативный способ доступа к свойствам через квадратные скобки. Такой способ сработает с любым именем свойства:

//let user = {};
//присваивание значения свойству
//user["likes birds"] = true;
//получение значения свойства
//alert(user["likes birds"]); // true
//удаление свойства
//delete user["likes birds"];

//Итого
//Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

//Они хранят свойства (пары ключ-значение), где:

//Ключи свойств должны быть строками или символами (обычно строками).
//Значения могут быть любого типа.
//Чтобы получить доступ к свойству, мы можем использовать:

//Запись через точку: obj.property.
//Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
//Дополнительные операторы:

//Удаление свойства: delete obj.prop.
//Проверка существования свойства: "key" in obj.
//Перебор свойств объекта: цикл for for (let key in obj).
//То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.


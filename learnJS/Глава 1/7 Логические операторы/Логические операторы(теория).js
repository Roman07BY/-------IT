// В JavaScript есть семь логических операторов:

// || (ИЛИ)
// ||= (Оператор логического присваивания ИЛИ)
// && (И)
// &&= (Оператор логического присваивания И)
// ! (НЕ)
// ?? (Оператор нулевого слияния)
// ??= (Оператор нулевого присваивания)


// || (ИЛИ)
// Оператор «ИЛИ» выглядит как двойной символ вертикальной черты:
// result = a || b;  в случае, если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false
// result = value1 || value2 || value3;
// Оператор || выполняет следующие действия:
// Вычисляет операнды слева направо.
// Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
// Если все операнды являются ложными (false), возвращает последний из них.


// ||= (Логическое присваивание ИЛИ)
// a ||= b;
// Оператор ||= принимает два операнда и выполняет следующие действия:
// Вычисляет операнды слева направо.
// Конвертирует a в логическое значение.
// Если a ложно, присваивает a значение b.
// Мы уже знаем, что ИЛИ || возвращает первое истинное значение, поэтому, если a является таковым, вычисление до правой части выражения не дойдёт.


// && (И)
// Оператор И пишется как два амперсанда &&:
// В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false:
// «&&» находит первое ложное значение
// При нескольких подряд операторах И:
// result = value1 && value2 && value3;
// Оператор && выполняет следующие действия:
// Вычисляет операнды слева направо.
// Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
// Если все операнды были истинными, возвращается последний.
// Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.
// alert( 1 && 2 && null && 3 ); // null
// alert( 1 && 2 && 3 ); // 3
// Приоритет оператора && больше, чем у ||


// &&= (Логическое присваивание И)
// a &&= b;
// Принцип действия &&= практически такой же, как и у оператора логического присваивания ИЛИ ||=. Единственное отличие заключается в том, что &&= присвоит a значение b только в том случае, если a истинно.
// Концепция оператора логического присваивания И &&= также основывается на «сокращённом вычислении»:


// ! (НЕ)
// Оператор НЕ представлен восклицательным знаком !.
// Синтаксис довольно прост:
// result = !value;
// Оператор принимает один аргумент и выполняет следующие действия:
// Сначала приводит аргумент к логическому типу true/false.
// Затем возвращает противоположное значение.

// Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.
// Приоритет оператора && больше, чем у ||
//Преобразование типов
//Условие:
//Какой результат будет у выражений ниже?

//"" + 1 + 0
//"" - 1 + 0
//true + false
//6 / "3"
//"2" * "3"
//4 + 5 + "px"
//"$" + 4 + 5
//"4" - 2
//"4px" - 2
//"  -9  " + 5
//"  -9  " - 5
//null + 1
//undefined + 1
//" \t \n" - 2

//Первое Решение:
"" + 1 + 0	//1
"" - 1 + 0	//-1
true + false	//1
6 / "3"	//2
"2" * "3"	//6
4 + 5 + "px" //9px
"$" + 4 + 5 //$9
"4" - 2 //2
"4px" - 2 //2px
"  -9  " + 5 //-4
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //undefined
" \t \n" - 2 //nan

//Ошибки:
"" + 1 + 0	//10
"$" + 4 + 5 //$45
"4px" - 2 //NaN
"  -9  " + 5 //  -9  5
undefined + 1 //NaN
" \t \n" - 2 //-2


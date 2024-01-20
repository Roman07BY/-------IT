//Через ?:
function basicOp(operation, value1, value2) {
  let result =
    operation == "+"
      ? value1 + value2
      : operation == "-"
      ? value1 - value2
      : operation == "*"
      ? value1 * value2
      : operation == "/"
      ? value1 / value2
      : "";
  return result;
}
//console.log(basicOp("+", 9, 3));
//basicOp = ("+", 9, 3);
//____________________________________________________________________________________________
//Через if:

//function basicOp(operation, value1, value2)
//{
//  let result;
//  if(operation == '+'){
//     result = value1 + value2;
//	 return result;
//     }
//  else if(operation == '-' ){
//     result = value1 - value2;
//	 return result;
//     }
//  else if(operation == '*'){
//     result = value1 * value2;
//	 return result;
//     }
//  else (operation == '/')
//     result = value1 / value2;
//  return result;
//}
//console.log(basicOp("+", 9, 3));
//basicOp = ("+", 9, 3);
//____________________________________________________________________________________________
//Через Switch:

//function basicOp(operation, value1, value2) {
//    switch (operation) {
//        case '+':
//            return value1 + value2;
//        case '-':
//            return value1 - value2;
//        case '*':
//            return value1 * value2;
//        case '/':
//            return value1 / value2;
//        default:
//            return 0;
//    }
//}
//console.log(basicOp("+", 9, 3));
//basicOp = ("+", 9, 3);

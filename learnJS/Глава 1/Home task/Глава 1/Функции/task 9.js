function basicOp(operation, value1, value2)
{
 let param1 = value1;
 let param2 = value2;
 let oper = operation;
 let set = param1 + (`${oper}`)
 console.log(set);
}
console.log(basicOp("-", 9, 3));
basicOp = ("-", 9, 3);

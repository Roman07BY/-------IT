function noSpace(x) {
  let string = "";
  for (index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      string += x[index];
    }
  }
  return string;
}

console.log(noSpace("roma ebachit vse zadachi na yra"));
noSpace("roma ebachit vse zadachi na yra");

//console.log(basicOp("+", 9, 3));
//basicOp = ("+", 9, 3);

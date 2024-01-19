function noSpace(x) {
  let string = "";
  for (index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      string += x[index];
    }
  }
  return string;
}

console.log(noSpace("asdas asda asdad asda2 kfjf oowrj"));
noSpace("asdas asda asdad asda2 kfjf oowrj");

//console.log(basicOp("+", 9, 3));
//basicOp = ("+", 9, 3);

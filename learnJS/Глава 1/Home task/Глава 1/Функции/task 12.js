function noSpace(x) {
  let string = "";
  for (index = 0; index < x.length; index++) {
	if(x[index]!== " "){
	string += x[index] 
}
  }
  return string;
}
noSpace("asdas asda asdad asda2 kfjf oowrj");
console.log(noSpace("asdas asda asdad asda2 kfjf oowrj"));

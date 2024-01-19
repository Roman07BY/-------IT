function removeChar(str) {
  let sumstr;
  for (let index = 0; index < str.length; index++) {
    if (index === str.length - 1) 
	sumstr += str[index];
  }

  return sumstr;
}

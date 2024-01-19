function removeChar(str) {
  let removeCharStr = "";
  for (let index = 1; index < str.length - 1; index++) {
    removeCharStr += str[index];
  }
  return removeCharStr;
}
let string = "valet";
console.log(removeChar(string));

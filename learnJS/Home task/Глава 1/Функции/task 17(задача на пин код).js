// let pin;
// function validatePIN(pin) {
//   let pinLength = pin.length;
//   console.log(pinLength);
//   let s = typeof pin;
//   if (s == "number" && pinLength == 4){

// }
//   else (s !== "number" || pinLength !== 4 || pinLength !== 6);
//   console.log(false);
// }
// pin = -1.234;
// console.log(validatePIN(-1.234));

let pin = 1234;
console.log(pin.length);
let s = typeof (pin);
console.log(s);
function validatePIN(pin) {
  for (index = 0; index < pin.length; index++) {
    if(pin[index] !== "number" || pin[index] == ""){
        return false;
    }
    if (pin.length == 4 || pin.length == 6) {
      return true;
    } else if (pin.length !== 4 || pin.length !== 6) {
      return false;
    }
  }
}
// validatePIN = ("-1.234");
// console.log(validatePIN("-1.234"));

const resultOfFN = validatePIN(pin); //вызов функции
return resultOfFN;

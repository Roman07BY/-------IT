function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] > "9" || pin[i] < "0") {
      // условие которое никогда не выполнится если в pin[index] число значит не выведет false (проверка на число)
      return false;
    }
  }
  return true;
}

console.log(validatePIN("6666")); //вызов функции

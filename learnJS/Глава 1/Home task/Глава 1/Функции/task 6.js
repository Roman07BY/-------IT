const words = ["apple"];

function smash(words) {
  let element = "";
  for (let index = 0; index < words.length; index++) {
    if (index === words.length - 1) {
      element += words[index];
    } else {
      element += words[index] + " ";
    }
  }
  return element;
}

const resultOfString = smash(words); //вызов функции
console.log(resultOfString);



//Через ?:
//function getGrade(s1, s2, s3) {
//  let sumAverage = (s1 + s2 + s3) / 3;
//  return sumAverage >= 90
//    ? "A"
//    : sumAverage >= 80
//    ? "B"
//    : sumAverage >= 70
//    ? "C"
//    : sumAverage >= 60
//    ? "D"
//    : sumAverage >= 0
//    ? "F"
//    : "";
//}
//____________________________________________________________________________________________
//Через if:
//function getGrade (s1, s2, s3) {
//	let sumAverage = (s1+s2+s3)/3;
//	if(sumAverage >= 90 && sumAverage <= 100){
//	  return "A";
//	}
//	else if(sumAverage >= 80 && sumAverage < 90){
//	  return "B";
//	}
//	  else if(sumAverage >= 70 && sumAverage < 80){
//	  return "C";
//	}
//	  else if(sumAverage >= 60 && sumAverage < 70){
//	  return "D";
//	}
//	  else(sumAverage >= 0 && sumAverage < 60)
//	  return "F";
//  }
//____________________________________________________________________________________________
//Через switch:
function getGrade(s1, s2, s3) {
  let sumAverage = (s1 + s2 + s3) / 3;
  switch (sumAverage) {
    case ">=90":
      return "A";
    case ">= 80":
      return "B";
    case ">= 70":
      return "C";
    case ">= 60":
      return "D";
    case ">= 0":
      return "F";
    default:
      return 0;
  }
}

console.log(getGrade(44, 70, 25));
getGrade = (44, 70, 25);
//console.log(basicOp("+", 9, 3));
//basicOp = ("+", 9, 3);

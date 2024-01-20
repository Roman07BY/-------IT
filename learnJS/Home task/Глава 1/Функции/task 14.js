  function findSmallestInt(args) {
    let minNum = args[0];
    for(index = 0; index < args.length; index++){
      if(args[index] < minNum){
        minNum = args[index]
      }
    }
    return minNum
  }
  console.log(findSmallestInt([40, 35, 67, 5, 2, 0, -5, -1]));
  findSmallestInt = [40, 35, 67, 5, 2, 0, -5, -1];
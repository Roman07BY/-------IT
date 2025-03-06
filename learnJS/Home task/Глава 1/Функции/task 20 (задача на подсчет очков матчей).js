function points(games) {
  var counter = 0;
  for (index = 0; index < games.length; index++) {
	games[index]




    if (games[index] > games[index + 1]) {
      counter += 3;
    } else if (games[index] == games[index + 1]) {
      counter += 1;
    } else if (games[index] < games[index + 1]) {
      counter += 0;
    }
  }
  return counter;
}
games = ["1:2", "1:2"];
console.log(points(games));

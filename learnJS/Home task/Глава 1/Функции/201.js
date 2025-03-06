function points(games) {
	let result = 0;
	for( const game of games )
	{
	  const [ x, y ] = game.split(":");
	  result += x > y ? 3 : x === y ? 1 : 0;
	}
	return result;
  }
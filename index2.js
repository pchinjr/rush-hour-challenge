//make a board

//The way the game works / the controller? 


function moveRight(id, board){
	
	//a user chooses a car to move and the direction to move the car in 
	console.log('you want to move the vehicle right');
	//the program finds the starting position
	console.log('it starts at board.square[' + id.row + '][' + id.collumn + ']');
	//the program finds the orientation of the vehicle 
	console.log('it is oriented in the ' + id.orientation + ' direction');
	//is the space after the vehicle clear?
	if(board.square[id.row][id.collumn + id.size] === "*") {
		console.log('the space ahead is clear');
	} else {
		console.log('you are blocked!');
		alert('you are blocked');
		return;
	}
	//is the vehicle still on the board? 
	if(board.square[id.row][id.collumn + id.size] === undefined) {
		console.log('you hit a wall');
		alert('you hit a wall');
		return;
	}
	//the new starting point is
	console.log('the new position is [' + id.row + '][' + (id.collumn + 1) + ']');
	//update vehicle model
	id.row = id.row;
	id.collumn = id.collumn + 1;
	//update board model 
	board.square[id.row][id.collumn - 1] = '*';
	board.square[id.row][id.collumn + id.size - 1] = id.name;
	render();
}

function moveLeft(id, board){
	
	//a user chooses a car to move and the direction to move the car in 
	console.log('you want to move the vehicle left');
	//the program finds the starting position
	console.log('it starts at board.square[' + id.row + '][' + id.collumn + ']');
	//the program finds the orientation of the vehicle 
	console.log('it is oriented in the ' + id.orientation + ' direction');
	//is the space before the vehicle clear?
	if(board.square[id.row][id.collumn - 1] === "*") {
		console.log('the space behind you is clear');
	} else {
		console.log('you are blocked!');
		alert('you are blocked');
		return;
	}
	//is the vehicle still on the board?
	if(board.square[id.row][id.collumn - 1] === undefined ) {
		console.log('you hit a wall');
		alert('you hit a wall');
		return;
	} 
	//the new starting point is
	console.log('the new position is [' + id.row + '][' + (id.collumn - 1) + ']');
	//update vehicle model
	id.row = id.row;
	id.collumn = id.collumn - 1;
	//update board model 
	board.square[id.row][id.collumn] = id.name;
	board.square[id.row][id.collumn + id.size] = "*";
	render();
}

function moveUp(id, board){
	
	//a user chooses a car to move and the direction to move the car in 
	console.log('you want to move the vehicle up');
	//the program finds the starting position
	console.log('it starts at board.square[' + id.row + '][' + id.collumn + ']');
	//the program finds the orientation of the vehicle 
	console.log('it is oriented in the ' + id.orientation + ' direction');
	//is the vehicle still on the board? 
	if(board.square[id.row - 1][id.collumn ] === undefined) {
		console.log('you hit a wall');
		alert('you hit a wall');
		return;
	}
	//is the space above the vehicle clear?
	if(board.square[id.row - 1][id.collumn] === "*") {
		console.log('the space ahead is clear');
	} else {
		console.log('you are blocked!');
		alert('you are blocked');
		return;
	}
	//the new starting point is
	console.log('the new position is [' + (id.row - 1) + '][' + id.collumn + ']');
	//update vehicle model
	id.row = id.row - 1;
	id.collumn = id.collumn;
	//update board model 
	board.square[id.row][id.collumn] = id.name;
	board.square[id.row + id.size][id.collumn] = '*';
	render();
}

function moveDown(id, board){
	
	//a user chooses a car to move and the direction to move the car in 
	console.log('you want to move the vehicle down');
	//the program finds the starting position
	console.log('it starts at board.square[' + id.row + '][' + id.collumn + ']');
	//the program finds the orientation of the vehicle 
	console.log('it is oriented in the ' + id.orientation + ' direction');
	//is the space below the vehicle clear?
	console.log(board.square[id.row + id.size + 1][id.collumn])
	if(board.square[id.row + id.size][id.collumn] === "*") {
		console.log('the space below you is clear');
	} else {
		console.log('you are blocked!');
		alert('you are blocked');
		return;
	}
	//is the vehicle still on the board?
	if(board.square[id.row + 1][id.collumn] === undefined ) {
		console.log('you hit a wall');
		alert('you hit a wall');
		return;
	} 
	//the new starting point is
	console.log('the new position is [' + (id.row + 1) + '][' + id.collumn + ']');
	//update vehicle model
	id.row = id.row + 1;
	id.collumn = id.collumn;
	//update board model 
	board.square[id.row - 1][id.collumn] = '*';
	board.square[id.row + id.size - 1][id.collumn] = id.name;
	render();
}


//when the red car hits the exit square, the game is over




//the view?

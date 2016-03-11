//initial input
var myBoard = {
	"board": [
		["1", "1", "1", "*", "*", "*"],
		["2", "*", "3", "4", "4", "4"],
		["2", "*", "3", "R", "R", "5"],
		["6", "7", "7", "8", "*", "5"],
		["6", "*", "*", "8", "9", "A"],
		["B", "B", "B", "8", "9", "A"]
    ]
};

//the models?
//a model of the board. this holds the size of the board, and the spaces, each space either has a car in it or it is empty, and the exit square
var Board = function(input) {
	//hold array of squares
	this.square = input.board;
	this.exit = this.square[2][5];
};

//a model of the vehicle, the vehicle has a size, an orientation, and a starting position that is the top left most block on the board
var Vehicle = function(name, size, orientation, row, collumn) {
	this.name = name
	this.size = size;
    this.orientation = orientation;
    this.row = row;
    this.collumn = collumn;
};

//there's probably a way to create vehicles based on the input string/json? loop through the string and find the length of matching letters, but for now..
var v1 = new Vehicle('1', 3, 'x', 0, 0);
var v2 = new Vehicle('2', 2, 'y', 1, 0);
var v3 = new Vehicle('3', 2, 'y', 1, 2);
var v4 = new Vehicle('4', 3, 'x', 1, 3);

//make a board
var board = new Board(myBoard);

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

var render = function() {
        $('#row1').html(JSON.stringify(board.square[0]));
        $('#row2').html(JSON.stringify(board.square[1]));
        $('#row3').html(JSON.stringify(board.square[2]));
        $('#row4').html(JSON.stringify(board.square[3]));
        $('#row5').html(JSON.stringify(board.square[4]));
        $('#row6').html(JSON.stringify(board.square[5]));
        $('#vehicles').html(JSON.stringify(board.vehicles));
};















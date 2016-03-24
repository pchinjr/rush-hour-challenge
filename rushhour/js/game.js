//initial input
var myString = "111000203444203RR567780560089ABBB89A";
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

//input string

//convert to JSON

//JSON back to string

//the models?
//a model of the board. this holds the size of the board, and the spaces, each space either has a car in it or it is empty, and the exit square
var Board = function(h, w, input) {
	this.height = h;
	this.width = w;
	this.spaces = input.board;
};

//a model of the vehicle, the vehicle has a size, an orientation, and a starting position that is the top left most block on the board
var Vehicle = function(name, size, orientation, row, collumn) {
		this.name = name;
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
var v5 = new Vehicle('5', 2, 'y', 2, 5);
var v6 = new Vehicle('6', 2, 'y', 3, 0);
var v7 = new Vehicle('7', 2, 'x', 3, 1);
var v8 = new Vehicle('8', 3, 'y', 3, 3);
var v9 = new Vehicle('9', 2, 'y', 4, 4);
var va = new Vehicle('a', 2, 'y', 4, 5);
var vb = new Vehicle('b', 3, 'x', 5, 0);
var vr = new Vehicle('r', 2, 'x', 2, 3);

//assign the vehicles to the board spaces
	//take the vehicle variable and put it in the board space array

//move a vehicle
	//what direction is the vehicle moving?
		//move vehicle up or down
		//move vehicle left or right
	//is the space empty in the direction it wants to travel
		//is the space above empty?
		//is the space below empty?

//is the red car at the exit?

function moveRight(id, board){

	//a user chooses a car to move and the direction to move the car in
	console.log('you want to move the vehicle right');
	//the program finds the starting position
	console.log('it starts at board.square[' + id.row + '][' + id.collumn + ']');
	//the program finds the orientation of the vehicle
	console.log('it is oriented in the ' + id.orientation + ' direction');
	//is the space after the vehicle clear?
	if(Board.spaces[id.row][id.collumn + id.size] === "*") {
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

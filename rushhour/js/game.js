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

//board object
var Board = function(input) {
	//hold array of squares
	this.square = input.board;
	
	//hold array of vehicles
	this.vehicles = [];
	
};

//vehicle object 
var Vehicle = function(id, size, orientation, position) {
	this.id = id;
	this.size = size;
    this.orientation = orientation;
    this.position = position; 
};

//put vehicles on board 

//move vehicles 

Board.prototype.setVehicle = function(id, size, orientation, position) {
	board.vehicles.push(new Vehicle(id, size, orientation, position));
};

Board.prototype.getVehicle = function(id) {
	var results = [];
	//searches the board for the upper left most position
	for(var x=0; x < 6; x++) {
		results.push(board.square[x].indexOf(id));
	}
	
	//loops through the results and returns the square position of that vehicle
	for(var y=0; y < 6; y++) {
		if(results[y] >= 0) { 
			//console.log('found block at board.square [' + results.indexOf(results[y]) + '][' + results[y] + ']' );
			//console.log(board.square[results.indexOf(results[y])][results[y]]);
			var coord = {'x':results.indexOf(results[y]), 'y':results[y]};
			return coord;
		}
	}
};

Board.prototype.moveVehicle = function(id, direction) {
	//use getVehicle()
	var coord = board.getVehicle(id);
	console.log(coord);
	//loop through vehicle array 
	for(var x=0; x<board.vehicles.length; x++) {
		board.vehicles.[x].indexOf(id);
	}
	//move left/right/up/down
	console.log(direction);
	if (direction = 'left') {
		
		console.log('bleh');
	}
		//validate legal move
	
	//update squares
	
};


var board = new Board(myBoard);
board.setVehicle('1', 3, 'x', '[0][0]');
board.setVehicle(2, 'y');
board.setVehicle(2, 'y');

var render = function() {
        $('#row1').html(JSON.stringify(board.square[0]));
        $('#row2').html(JSON.stringify(board.square[1]));
        $('#row3').html(JSON.stringify(board.square[2]));
        $('#row4').html(JSON.stringify(board.square[3]));
        $('#row5').html(JSON.stringify(board.square[4]));
        $('#row6').html(JSON.stringify(board.square[5]));
        $('#vehicles').html(JSON.stringify(board.vehicles));
};















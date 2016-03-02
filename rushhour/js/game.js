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
	this.board = input.board;
	
	//hold array of vehicles
	this.vehicles = [];
};

//vehicle object 
var Vehicle = function(size, position, direction) {
	this.size = size;
    this.direction = direction;
};




var board = new Board(myBoard);










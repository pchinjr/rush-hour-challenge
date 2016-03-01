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

var Board = function(input) {
	this.spaces = input.board;
	this.exit = '[2][5]';
	this.vehicles = []; 
	
};

Board.prototype.placeVehicle = function(size, position, direction) {
	this.vehicles.push(new Vehicle(size, position, direction));
}


var Vehicle = function(size, position, direction) {
	this.size = size;
    this.position = position;
    this.direction = direction;
};


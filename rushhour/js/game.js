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
var Vehicle = function(size, direction) {
	this.size = size;
    this.direction = direction;
};

Board.prototype.setVehicle = function(size, direction) {
	board.vehicles.push(new Vehicle(size, direction));
};

Board.prototype.getVehicle = function(id) {
	var results = [];
	for(var x=0; x < 5; x++) {
		results.push(board.board[x].indexOf(id));
	}
	return results;
};

Board.prototype.moveVehicle = function() {
	
}


var board = new Board(myBoard);
board.setVehicle(3, 'x');
board.setVehicle(2, 'y');
board.setVehicle(2, 'y');

var render = function() {
        $('#row1').html(JSON.stringify(board.board[0]));
        $('#row2').html(JSON.stringify(board.board[1]));
        $('#row3').html(JSON.stringify(board.board[2]));
        $('#row4').html(JSON.stringify(board.board[3]));
        $('#row5').html(JSON.stringify(board.board[4]));
        $('#row6').html(JSON.stringify(board.board[5]));
        $('#vehicles').html(JSON.stringify(board.vehicles));
};















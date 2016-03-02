"use strict";

function Maze(width, height) { //maze object
    this.width = width;
    this.height = height;
    
    this.startX           = null; 
    this.startY           = null;
    this.startOrientation = null;
    this.endX             = null;
    this.endY             = null;
    
    this.directions = ["north", "east", "south", "west"];
    this.spaces = [];
    
    var x, y;
    for(x=1; x<=width; x +=1) { //the spaces are represented by an array matrix, this for loop makes a new empty array for each space in the x and y coordinates
        this.spaces[x] = []; //the array has width number of collumns, each collumn then has height number of elements in the collumn array. the element in the collum is a space object 
        for(y=1; y<=height; y+=1) { //this for loop will add one element to the array for each space in the collumn 
            this.spaces[x][y] = new MazeSpace(this.directions); //the array now creates mazespace objects
        }
    }
}

Maze.prototype.setStart = function(x,y,orientation) { //setter methods?
    if (this.isInBounds(x,y) && this.isValidDirection(orientation)) { 
        this.startX = x;
        this.startY = y;
        this.startOrientation = orientation;
        return true;
    }
    return false;
};

Maze.prototype.setEnd = function(x,y) {
    if (!this.isInBounds(x,y)) {
        return false;
    }
    this.endX = x;
    this.endY = y;
    return true;
};

Maze.prototype.setWall = function (x,y,direction) {
    if (this.isInBounds(x,y) && this.isValidDirection(direction)) { //validates the inputs of wall
        this.spaces[x][y].setWall(direction);
        return true;
    } 
    return false;
};

Maze.prototype.isValidDirection = function(direction) {
   return this.directions.indexOf(direction) !== -1;
    
}

Maze.prototype.isInBounds = function(x,y) {
    return x > 0 && x <= this.width && y > 0 && y <= this.height;
}

var myRedGamePiece, myBlueGamePiece, myYellowGamePiece;
let size = 70;
let xMax = 480, xMin = 0, yMax = 270, yMin = 0;
let redForward = 1, blueForward = 1, blueUpward = 1, yellowForward = 1, yellowUpward = 1;

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); //20
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function startGame(){
    myGameArea.start();
    myRedGamePiece = new component(size, size, "red", 20, 20);
    myYellowGamePiece = new component(size, size, "yellow", 50, 100);
    myBlueGamePiece = new component(size, size, "blue", 10, 160);
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
function updateGameArea() {
    myGameArea.clear();

    if(myRedGamePiece.x + size === xMax || myRedGamePiece.x === xMin) {
        redForward = -redForward;
    }
    if(myBlueGamePiece.x + size === xMax || myBlueGamePiece.x === xMin) {
        blueForward = -blueForward;
    }
    if(myBlueGamePiece.y + size === yMax || myBlueGamePiece.y === yMin) {
        blueUpward = -blueUpward;
    }
    if(myYellowGamePiece.x + size === xMax || myYellowGamePiece.x === xMin) {
        yellowForward = -yellowForward;
    }
    if(myYellowGamePiece.y + size === yMax || myYellowGamePiece.y === yMin) {
        yellowUpward = -yellowUpward;
    }

    
    myRedGamePiece.x += redForward;
    myBlueGamePiece.x += blueForward;
    myBlueGamePiece.y += blueUpward;
    myYellowGamePiece.x += yellowForward;
    myYellowGamePiece.y += yellowUpward;
    
    myRedGamePiece.update();
    myYellowGamePiece.update();
    myBlueGamePiece.update();
}
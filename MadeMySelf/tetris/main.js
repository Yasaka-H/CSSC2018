window.addEventListener("load", init);

function init() {
    stage = new createjs.Stage("myCanvas");
    COLS = 10;
    ROWS = 20;
    board = [];
    Shapes = [
        [ 1, 1, 1, 1 ],
        [ 1, 1, 1, 0,
            1 ],
        [ 1, 1, 1, 0,
            0, 0, 1 ],
        [ 1, 1, 0, 0,
            1, 1 ],
        [ 1, 1, 0, 0,
            0, 1, 1 ],
        [ 0, 1, 1, 0,
            1, 1 ],
        [ 0, 1, 0, 0,
            1, 1, 1 ]
    ];
    colors = [
        'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
    ];


    let bg = new createjs.Shape();
    bg.graphics.beginFill("gray").drawRect(0, 0, 300, 600);
    stage.addChild(bg);

    



    function initialize(){
        for ( var y = 0; y < ROWS; ++y ) {
            board[ y ] = [];
            for ( var x = 0; x < COLS; ++x ) {
                board[ y ][ x ] = 0;
            }
        }
    }

    function rotate( current ) {
        var newCurrent = [];
        for ( var y = 0; y < 4; ++y ) {
            newCurrent[ y ] = [];
            for ( var x = 0; x < 4; ++x ) {
                newCurrent[ y ][ x ] = current[ 3 - x ][ y ];
            }
        }
        return newCurrent;
    }

    function newGame(){

    }

    stage.update();
}
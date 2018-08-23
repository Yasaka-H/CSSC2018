window.addEventListener("load", init);

function init() {
    stage = new createjs.Stage("myCanvas");

    let bg = new createjs.Shape();
    bg.graphics.beginFill("black").drawRect(0, 0, 960, 540);
    stage.addChild(bg);

    player = new createjs.Shape();
    player.graphics.beginFill("white").drawCircle(0, 0, 10);
    stage.addChild(player);

    stage.update();

}

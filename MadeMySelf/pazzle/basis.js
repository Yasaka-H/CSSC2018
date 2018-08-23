window.addEventListener("load", init);

function init(){
    // Stageオブジェクトを作成。表示リストのルートになります。
    stage = new createjs.Stage("myCanvas");
    //----------------------------------------
    // パズルの土台を作成
    //----------------------------------------
    var bg = new createjs.Shape();
    bg.graphics.setStrokeStyle(2).beginStroke("gray").beginFill("lightgray").drawRect(200, 50, 760, 440);
    stage.addChild(bg);
    // 円のピース
    baseCircle = new createjs.Shape();
    baseCircle.graphics.setStrokeStyle(2).beginStroke("gray").beginFill("white").drawCircle(0, 0, 50);
    baseCircle.x = 400;
    baseCircle.y = 200;
    stage.addChild(baseCircle);
    // 四角のピース
    baseRect = new createjs.Shape();
    baseRect.graphics.setStrokeStyle(2).beginStroke("gray").beginFill("white").drawRect(-50, -50, 100, 100);
    baseRect.x = 500;
    baseRect.y = 300;
    stage.addChild(baseRect);
    // 星のピース
    baseStar = new createjs.Shape();
    baseStar.graphics.setStrokeStyle(2).beginStroke("gray").beginFill("white").drawPolyStar(0, 0, 50, 5, 0.6, -90);
    baseStar.x = 700;
    baseStar.y = 250;
    stage.addChild(baseStar);
    //----------------------------------------
    // パズルのピースを作成
    //----------------------------------------
    // 円のピース
    pieceCircle = new createjs.Shape();
    pieceCircle.graphics.beginFill("DarkRed").drawCircle(0, 0, 50);
    pieceCircle.x = 100;
    pieceCircle.y = 100;
    stage.addChild(pieceCircle);
    // 四角のピース
    pieceRect = new createjs.Shape();
    pieceRect.graphics.beginFill("green").drawRect(-50, -50, 100, 100);
    pieceRect.x = 100;
    pieceRect.y = 200;
    stage.addChild(pieceRect);
    // 星のピース
    pieceStar = new createjs.Shape();
    pieceStar.graphics.beginFill("blue").drawPolyStar(0, 0, 50, 5, 0.6, -90);
    pieceStar.x = 100;
    pieceStar.y = 300;
    stage.addChild(pieceStar);

    stage.update();

}
window.addEventListener("load", init);

function init() {
    mark = 0;

    stage = new createjs.Stage("myCanvas");

    let bg = new createjs.Shape();
    bg.graphics.beginFill("black").drawRect(0, 0, 960, 540);
    stage.addChild(bg);

    titleText = new createjs.Text("Turaize - Majini", "100px sans-serif", "white");
    titleText.x = 480;
    titleText.y = 50;
    titleText.textAlign = "center";
    stage.addChild(titleText);

    neoText = new createjs.Text("HatarakiTaku\nNaiii!!!", "100px sans-serif", "white");
    neoText.x = 480;
    neoText.y = 50;
    neoText.textAlign = "center";

    stage.addEventListener("click", handleClick);

    function handleClick() {
        stage.removeChild(titleText);
        mark = 1;
        stage.addChild(neoText);
        stage.update();
    }

    stage.update();
}



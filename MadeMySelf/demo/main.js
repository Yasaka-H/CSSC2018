//createJSの読み込みが終わってから、init関数をよぶ。
window.addEventListener("load", init);

function init() {
    stage = new createjs.Stage("myCanvas");
    scene = 0;
    count = 0;
    enemyList = [];
    bulletList = [];

    let bg = new createjs.Shape();
    bg.graphics.beginFill("black").drawRect(0, 0, 960, 540);
    stage.addChild(bg);

    player = new createjs.Shape();
    player.graphics.beginFill("white").drawCircle(0, 0, 10);
    stage.addChild(player);


    titleText = new createjs.Text("Title", "40px sans-serif", "white");
    titleText.x = 480;
    titleText.y = 50;
    titleText.textAlign = "center";
    stage.addChild(titleText);　　　　

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick() {
        if(scene === 0){
            stage.update();
        }

        if(scene === 1) {

            player.x = stage.mouseX;
            player.y = stage.mouseY;

            if (count % 100 === 0) {
                let enemy = new createjs.Shape();
                enemy.graphics.beginFill("red").drawCircle(0, 0, 10);

                enemy.x = 960;
                enemy.y = 540 * Math.random();

                stage.addChild(enemy);
                enemyList.push(enemy);
            }
            count = count + 1;

            for (let i = 0; i < enemyList.length; i++) {
                enemyList[i].x -= 2;
            }

            for (let i = 0; i < bulletList.length; i++) {
                bulletList[i].x += 10;
            }

            for (let i = 0; i < enemyList.length; i++) {
                let enemyLocal = enemyList[i].localToLocal(0, 0, player);
                if (player.hitTest(enemyLocal.x, enemyLocal.y)) {
                    gameOver();
                }
            }

            for (let i = 0; i < bulletList.length; i++) {
                for (let j = 0; j < enemyList.length; j++) {
                    let localPoint = bulletList[i].localToLocal(0, 0, enemyList[j]);
                    if (enemyList[j].hitTest(localPoint.x, localPoint.y)) {
                        stage.removeChild(bulletList[i]);
                        bulletList.splice(i, 1);

                        stage.removeChild(enemyList[j]);
                        enemyList.splice(j, 1);
                    }
                }
            }

            stage.update();
        }
    }

}
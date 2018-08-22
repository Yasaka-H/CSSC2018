window.addEventListener("load", init);

function init() {
    stage = new createjs.Stage("myCanvas");
    count = 0; /// Tickイベントのカウント
    enemyList1 = [];
    playerBulletList = [];
    enemyBulletList = [];
    scene = 0;

    // 背景
    let bg = new createjs.Shape();
    bg.graphics.beginFill("black")
        .drawRect(0, 0, 960, 540);
    stage.addChild(bg);

    // 自機
    player = new createjs.Shape();
    player.graphics.beginFill("white")
        .moveTo(20, 0)
        .lineTo(0, 30)
        .lineTo(40, 30)
        .closePath();
    player.x = 480;
    player.y = 450;


    for(var i = 0; i < 15; i++) {
        enemy = new createjs.Shape();
        enemy.graphics.beginFill("blue").drawRect( i * 50 + 50, 150, 40, 40);
        enemyList1.push(enemy);
    }

    // タイトル画面
    titleText = new createjs.Text("Shooting Game", "40px sans-serif", "white");
    titleText.x = 480;
    titleText.y = 50;
    titleText.textAlign = "center";
    stage.addChild(titleText);

    howToText = new createjs.Text("操作方法:自機を動かす(<- ->字キー)、弾を撃つ(スペースキー)", "20px sans-serif", "white");
    howToText.x = 480;
    howToText.y = 100;
    howToText.textAlign = "center";
    stage.addChild(howToText);

    pressSpaceText = new createjs.Text("Press Space key", "40px sans-serif", "white")
    pressSpaceText.x = 480;
    pressSpaceText.y = 150;
    pressSpaceText.textAlign = "center";
    stage.addChild(pressSpaceText);

    createjs.Sound.registerSound("shot1.mp3");
    createjs.Sound.registerSound("shot-struck1.mp3");

    // Tickイベントの登録
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick() {
        if (scene === 0) {
            stage.update();
        }

        if (scene === 1) {
            stage.addChild(player);

            if (isPressRight == true)
                player.x += 5;
            if (isPressLeft == true)
                player.x -= 5;

            if(count === 0){
                for(var i = 0; i < enemyList1.length; i++){
                    enemy = enemyList1[i];
                    stage.addChild(enemy);
                }
            }

            if (count % 50 === 0) {
                let enemyBullet = new createjs.Shape();
                enemyBullet.graphics.beginFill("yellow").drawCircle(0, 0, 5);

                let id = Math.floor(Math.random()* 9 );
                let regX = 200;
                let regY ;
                enemyBullet.x = 50 * id + 75;
                enemyBullet.y = 200;

                stage.addChild(enemyBullet);
                enemyBulletList.push(enemyBullet);
            }
            count = count + 1;

            for (let i = 0; i < enemyBulletList.length; i++) {
                enemyBulletList[i].y += 2;
            }

            for (let i = 0; i < playerBulletList.length; i++) {
                playerBulletList[i].y -= 10;
            }

            for (let i = 0; i < enemyBulletList.length; i++) {
                let enemyLocal = enemyBulletList[i].localToLocal(0, 0, player);
                if (player.hitTest(enemyLocal.x, enemyLocal.y)) {
                    GameOver();
                }
            }

            for (let i = 0; i < playerBulletList.length; i++) {
                for (let j = 0; j < enemyList1.length; j++) {
                    let localPoint = playerBulletList[i].localToLocal(0, 0, enemyList1[j]);
                    if (enemyList1[j].hitTest(localPoint.x, localPoint.y)) {
                        stage.removeChild(enemyList1[j]);
                        enemyList1.splice(j, 1);

                        createjs.Sound.play("shot-struck1.mp3");
                        stage.removeChild(playerBulletList[i]);
                        bulletList.splice(i, 1);

                        //enemyがリストから消去されて表示されない


                    }
                }
            }

            let clearCount = 0;
            for(let i = 0; i < enemyList1.length; i++){
                if(enemyList1[i]) clearCount++;
            }

            if(clearCount === 0) gameClear();

            stage.update();
        }
    }
}

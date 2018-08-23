window.addEventListener("load", init);

function init() {
    stage.addEventListener("click", handleClick);

    function handleClick() {
        if (scene === 0) {
            scene = 1;
            stage.removeChild(titleText)
        } else {

            let bullet = new createjs.Shape();
            bullet.graphics.beginFill("white").drawCircle(0, 0, 3);
            bullet.x = player.x;
            bullet.y = player.y;

            bulletList.push(bullet);
            stage.addChild(bullet);
        }
    }
}

window.addEventListener("load", init);

function init(){
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick(event) {
        // Stageの描画を更新
        stage.update();
    }
}
window.addEventListener("load", init);

function init() {
    gameClear = function() {
        alert("ゲームクリア！");
        createjs.Ticker.removeAllEventListeners();
        stage.removeAllEventListeners();
    }
}
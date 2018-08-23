window.addEventListener("load", init);

function init() {
    gameOver = function() {
        alert("ゲームオーバー");
        createjs.Ticker.removeAllEventListeners();
        stage.removeAllEventListeners();
    }
}

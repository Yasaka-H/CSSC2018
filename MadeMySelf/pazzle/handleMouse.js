window.addEventListener("load", init);

function init(){
    pieceCircle.addEventListener("mousedown", handleMouseDown);
    pieceRect.addEventListener("mousedown", handleMouseDown);
    pieceStar.addEventListener("mousedown", handleMouseDown);
    function handleMouseDown(event) {
        // currentTarget を使うことで、どれがマウスダウンされたか判別できる
        var piece = event.currentTarget;
        // 目標の対象を判定する
        var targetBase;
        // マウスダウンされたものの形状にあわせて、目標のシェイプを選定
        if (piece == pieceCircle) {
            targetBase = baseCircle;
        }
        if (piece == pieceStar) {
            targetBase = baseStar;
        }
        if (piece == pieceRect) {
            targetBase = baseRect;
        }
        // マウスが押された場所を保存しておく
        var mouseDownX = stage.mouseX - piece.x;
        var mouseDownY = stage.mouseY - piece.y;
        // ドラッグ関連イベントを登録
        piece.addEventListener("pressmove", handlePressMove);
        piece.addEventListener("pressup", handlePressUp);
        function handlePressMove(event) {
            updateMousePosition(); // マウスの座標に追随
        }
        function handlePressUp(event) {
            updateMousePosition(); // マウスの座標に追随
            // マウスアップされたときに、目標のシェイプとの当たり判定をとる
            var pt = targetBase.localToLocal(0, 0, piece);
            var isHit = piece.hitTest(pt.x, pt.y);
            if (isHit == true) {
                // 吸着させる
                piece.x = targetBase.x;
                piece.y = targetBase.y;
            }
            // ドラッグ関連イベントを解除
            piece.removeEventListener("pressmove", handlePressMove);
            piece.removeEventListener("pressup", handlePressUp);
        }
        // マウスのドラッグ処理
        function updateMousePosition() {
            // オブジェクトの座標はマウスの座標に追随
            // ただしマウスダウンした場所のズレを補正
            piece.x = stage.mouseX - mouseDownX;
            piece.y = stage.mouseY - mouseDownY;
        }
    }

}
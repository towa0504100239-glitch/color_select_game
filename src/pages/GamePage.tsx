import "../styles/GamePage.css";

const GamePage = () => {
  return (
    <div className="gamePage">

      <div className="gameHeader">

        <div className="timeArea">
          <p className="headerLabel">TIME</p>

          <div className="timeBar">
            <div className="timeBarFill"></div>
          </div>
        </div>

        <div className="timeNumber">
          25.0
        </div>

        <div className="scoreArea">
          <p className="headerLabel">SCORE</p>
          <p className="scoreNumber">12</p>
        </div>

      </div>

      {/* 問題 */}
      <div className="questionBox">
        <span className="questionText greenText">
          赤
        </span>
      </div>

      <p className="instruction">
        文字の色を選んでください
      </p>

      {/* 回答ボタン */}
      <div className="colorButtons">

        <button className="colorBtn redBtn">
          赤
        </button>

        <button className="colorBtn blueBtn">
          青
        </button>

        <button className="colorBtn greenBtn">
          緑
        </button>

        <button className="colorBtn yellowBtn">
          黄
        </button>

      </div>

    </div>
  );
};

export default GamePage;
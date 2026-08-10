import { useNavigate } from "react-router-dom";
import "../styles/ResultPage.css";
import lefticon from "../assets/leftIcon.png";
import righticon from "../assets/rightIcon.png";

const ResultPage = () => {
  const navigate = useNavigate();
  const score = 23;
  const correct = 23;
  const wrong = 7;
  const accuracy = 76;
  const maxCombo = 8;

  return (
    <div className="resultPage">
      <div className="resultTitle">
        <img
          src={lefticon}
          alt=""
          className="resultIcon"
        />
        <h1>リザルト</h1>
        <img
          src={righticon}
          alt=""
          className="resultIcon"
        />
      </div>
      <div className="resultCard">
        <p className="scoreLabel">
          SCORE
        </p>
        <p className="resultScore">
          {score}
        </p>
        <div className="resultLine" />
        <div className="resultDetails">
          <div className="resultRow">
            <span>正解数</span>
            <span>{correct} 回</span>
          </div>
          <div className="resultRow">
            <span>間違えた数</span>
            <span>{wrong} 回</span>
          </div>
          <div className="resultRow">
            <span>正解率</span>
            <span>{accuracy} %</span>
          </div>
          <div className="resultRow">
            <span>最大コンボ</span>
            <span>{maxCombo} 回</span>
          </div>

        </div>

      </div>
      <div className="resultButtons">
        <button
          className="retryBtn"
          onClick={() => navigate("/game")}
        >
          もう一度プレイ
        </button>

        <button
          className="backTitleBtn"
          onClick={() => navigate("/")}
        >
          タイトルに戻る
        </button>

      </div>

    </div>
  );
};

export default ResultPage;
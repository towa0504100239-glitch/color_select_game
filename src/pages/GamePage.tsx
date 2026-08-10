import { colors } from "../data/colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GamePage.css";
import "../styles/common.css";

const createQuestion = () => {
  const textIndex =
    Math.floor(Math.random() * colors.length);
  const colorIndex =
    Math.floor(Math.random() * colors.length);
  return {
    text: colors[textIndex].name,
    color: colors[colorIndex].color,
  };
};
function GamePage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [question, setQuestion] =
    useState(createQuestion());
  const nextQuestion = () => {
    setQuestion(createQuestion());
  };
  const checkAnswer = (selectedColor: string) => {
    if (selectedColor === question.color) {
      console.log("正解！");
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log("不正解！");
    }
    nextQuestion();
  };
useEffect(() => {
  const timer = setInterval(() => {
    setTime((prevTime) => {
      if (prevTime <= 1) {
        clearInterval(timer);
        return 0;
      }

      return prevTime - 1;
    });
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);

// 0秒になったらリザルト
useEffect(() => {
  if (time === 0) {
    navigate("/result", {
      state: {
        score: score,
      },
    });
  }
}, [time, navigate, score]);
  return (
    <div className="gamePage">
      <div className="gameHeader">
        <div className="timeArea">
          <p className="headerLabel">
            TIME
          </p>
          <div className="timeBar">
            <div
              className="timeBarFill"
              style={{
                width: `${(time / 30) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="timeNumber">
          {time}
        </div>
        <div className="scoreArea">

          <p className="headerLabel">
            SCORE
          </p>
          <p className="scoreNumber">
            {score}
          </p>
        </div>
      </div>
      <div className="questionBox">

        <span
          className="questionText"
          style={{
            color: question.color,
          }}
        >
          {question.text}
        </span>

      </div>
      <p className="instruction">
        文字の色を選んでください
      </p>
      <div className="colorButtons">
        <button
          className="colorBtn redBtn"
          onClick={() =>
            checkAnswer("#FF4D4F")
          }
        >
          赤
        </button>
        <button
          className="colorBtn blueBtn"
          onClick={() =>
            checkAnswer("#4A90E2")
          }
        >
          青
        </button>
        <button
          className="colorBtn greenBtn"
          onClick={() =>
            checkAnswer("#4CAF50")
          }
        >
          緑
        </button>
        <button
          className="colorBtn yellowBtn"
          onClick={() =>
            checkAnswer("#FFD93D")
          }
        >
          黄
        </button>
      </div>
    </div>
  );
}


export default GamePage;
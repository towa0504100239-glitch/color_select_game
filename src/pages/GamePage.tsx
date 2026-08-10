import { useState } from "react";
import { colors } from "../data/colors";

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
  const [question, setQuestion] =
    useState(createQuestion());
  const nextQuestion = () => {
    setQuestion(createQuestion());
  };
const checkAnswer = (selectedColor: string) => {
  if (selectedColor === question.color) {
    console.log("正解！");
  } else {
    console.log("不正解！");
  }
  nextQuestion();
};

  return (
    <div className="gamePage">
      <div className="gameHeader">
        <p className="headerLabel">
          TIME
        </p>
        <div></div>
        <p className="headerLabel">
          SCORE
        </p>
        <div className="timeBar">
          <div className="timeBarFill"></div>
        </div>
        <div className="timeNumber">
          25.0
        </div>
        <div className="scoreNumber">
          12
        </div>
      </div>
      <div className="questionBox">
        <span
          className="questionText"
          style={{
            color: question.color
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
          onClick={() => checkAnswer("#FF4D4F")}
        >
          赤
        </button>

        <button
          className="colorBtn blueBtn"
          onClick={() => checkAnswer("#4A90E2")}
        >
          青
        </button>

        <button
          className="colorBtn greenBtn"
          onClick={() => checkAnswer("#4CAF50")}
        >
          緑
        </button>

        <button
          className="colorBtn yellowBtn"
          onClick={() => checkAnswer("#FFD93D")}
        >
          黄
        </button>
      </div>
    </div>
  );
}


export default GamePage;
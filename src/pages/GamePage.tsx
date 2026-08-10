import { colors } from "../data/colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GamePage.css";
import "../styles/common.css";

const createQuestion = (
  prevColor?: string,
  sameColorCount = 0
) => {
  const textIndex =
    Math.floor(Math.random() * colors.length);
  let colorIndex =
    Math.floor(Math.random() * colors.length);
  if (sameColorCount >= 2) {
    while (colors[colorIndex].color === prevColor) {
      colorIndex =
        Math.floor(Math.random() * colors.length);
    }
  }
  return {
    text: colors[textIndex].name,
    color: colors[colorIndex].color,
  };
};

function GamePage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [answer, setAnswer] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [sameColorCount, setSameColorCount] =
    useState(1);
  const [question, setQuestion] =
    useState(createQuestion());
  const nextQuestion = () => {
    const newQuestion = createQuestion(
      question.color,
      sameColorCount
    );
    if (newQuestion.color === question.color) {
      setSameColorCount((prev) => prev + 1);
    } else {
      setSameColorCount(1);
    }
    setQuestion(newQuestion);
  };

  const checkAnswer = (selectedColor: string) => {
    if (selectedColor === question.color) {
      setScore((prevScore) => prevScore + 1);
      setAnswer((prevAnswer) => prevAnswer + 1);
      setCombo((prevCombo) => {
        const newCombo = prevCombo + 1;
        setMaxCombo((prevMaxCombo) =>
          Math.max(prevMaxCombo, newCombo)
        );

        return newCombo;
      });
    } else {
      setIncorrect(
        (prevIncorrect) => prevIncorrect + 1
      );
      setCombo(0);
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
  const total = answer + incorrect;
  const rate =
    total === 0
      ? 0
      : Math.round((answer / total) * 100);
  useEffect(() => {
    if (time === 0) {
      navigate("/result", {
        state: {
          score,
          answer,
          incorrect,
          rate,
          maxCombo,
        },
      });
    }
  }, [
    time,
    navigate,
    score,
    answer,
    incorrect,
    rate,
    maxCombo,
  ]);
  return (
    <div className="gamePage">
      <div className="gameHeader">
        <div className="timeArea">
          <p className="headerLabel v1">
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
                  <p className="timeNumber">
            {time}
          </p>
         <div className="scoreArea">
          <p className="headerLabel v2">
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
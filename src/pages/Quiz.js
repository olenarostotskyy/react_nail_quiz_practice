import React from "react";
import "./Quiz.css";

const Quiz = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  // const Quiz = () => {
  // console.log("hhhhiiii");
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="quiz-container">
      <div className="answers-row">
        <div className="test-question">
          <h1>{question}</h1>
          {/* <h>question</h> */}
        </div>
        <div className="test-answers-col">
          {shuffledAnswers.map((answer) => (
            <button
              className={`${
                correct_answer === answer
                  ? "test-answ-correct"
                  : "test-answ-incorrect"
              }`}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          ))}

          {/* <div
            onClick={() => handleAnswer(shuffledAnswers[0])}
            className="test-answ"
          >
            {shuffledAnswers[0]}
          </div>
          <div
            onClick={() => handleAnswer(shuffledAnswers[1])}
            className="test-answ"
          >
            {shuffledAnswers[1]}
          </div>
        </div>
        <div className="test-answers-col">
          <div
            onClick={() => handleAnswer(shuffledAnswers[2])}
            className="test-answ"
          >
            {shuffledAnswers[2]}
          </div>
          <div
            onClick={() => handleAnswer(shuffledAnswers[3])}
            className="test-answ"
          >
            {shuffledAnswers[3]}
          </div>
        </div> */}
        </div>
      </div>
      {/* <div className="buttons">
        <button>previous</button>
        <button>next</button>
      </div> */}
    </div>
  );
};

export default Quiz;

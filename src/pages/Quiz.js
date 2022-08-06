import React from "react";
import "./Quiz.css";

const Quiz = ({
  handlePrevQuestion,
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  // const Quiz = () => {
  // console.log("hhhhiiii");

  // const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
  //   () => Math.random() - 0.5
  // );

  console.log(correct_answer);
  return (
    <div className="quiz-container">
      <div className="answers-row">
        <div className="test-question">
          <h1>{question}</h1>
          {/* <h>question</h> */}
        </div>
        <div className="test-answers-col">
          {answers.map((answer, idx) => {
            const classColor = showAnswers
              ? answer === correct_answer
                ? "test-answ-correct"
                : "test-answ-incorrect"
              : "test-answ";

            console.log(showAnswers);
            return (
              <button
                key={idx}
                className={classColor}
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </button>
            );
          })}

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
      {/* {showAnswers && ( */}
      <div className="buttons">
        <button onClick={handlePrevQuestion} className="prv-btn">
          previous
        </button>
        <button onClick={handleNextQuestion} className="nxt-btn">
          next
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

export default Quiz;

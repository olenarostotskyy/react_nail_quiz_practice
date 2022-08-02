import React from "react";
import "./Quiz.css";

const Quiz = ({ data: { question, correct_answer, incorrect_answers } }) => (
  // const Quiz = () => {
  // console.log("hhhhiiii");
  <div className="quiz-container">
    <div className="answers-row">
      <div className="test-question">
        <h1>{question}</h1>
        {/* <h>question</h> */}
      </div>
      <div className="test-answers-col">
        <div className="test-answ">{correct_answer}</div>
        <div className="test-answ">{incorrect_answers[0]}</div>
      </div>
      <div className="test-answers-col">
        <div className="test-answ">{incorrect_answers[1]}</div>
        <div className="test-answ">{incorrect_answers[2]}</div>
      </div>
    </div>
    <div className="buttons">
      <button>previous</button>
      <button>next</button>
    </div>
  </div>
);
export default Quiz;

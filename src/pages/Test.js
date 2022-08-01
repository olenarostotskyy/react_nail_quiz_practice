import React from "react";
import "./Test.css";

const Test = () => {
  return (
    <div className="test-container">
      <div className="answers-row">
        <div className="test-question">
          <h1>Test questions</h1>
        </div>
        <div className="test-answers-col">
          <div className="test-answ">
            answer 1 hfhfhhfhfhfhfhfhfhhfhfhhfhfhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </div>
          <div className="test-answ">answer 2</div>
        </div>
        <div className="test-answers-col">
          <div className="test-answ">answer 3</div>
          <div className="test-answ">answer 4</div>
        </div>
      </div>
      <div className="buttons">
        <button>previous</button>
        <button>next</button>
      </div>
    </div>
  );
};

export default Test;

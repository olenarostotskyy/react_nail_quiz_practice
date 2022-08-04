import React, { useState, useEffect } from "react";
import "./Test.css";
import Quiz from "./Quiz";
// import axios from "axios";

const ApiUrl = "http://127.0.0.1:5000/questions";

const Test = () => {
  const [questionsData, setQuestions] = useState(null);
  // const [index, Updateindex] = useState(0);
  useEffect(() => {
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        console.log(data);
      });
  }, []);

  // const getQuestionsFromAPI = () => {
  //   axios
  //     .get("http://127.0.0.1:5000/questions")
  //     .then((response) => {
  //       setQuestions(response.data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log("Can't get questions", error);
  //     });
  // };

  const handleAnswer = (answer) => {};
  return questionsData !== null ? (
    <div className="test-container">
      <Quiz data={questionsData[0]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    ""
  );
};

export default Test;

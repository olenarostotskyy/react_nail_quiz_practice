import React, { useState, useEffect } from "react";
import "./Test.css";
import Quiz from "./Quiz";
// import axios from "axios";

const ApiUrl = "http://127.0.0.1:5000/questions";

const Test = () => {
  const [questionsData, setQuestions] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [showAnwers, setShowAnswers] = useState(false);

  // const [index, Updateindex] = useState(0);
  useEffect(() => {
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setCurrentIndex(0);
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

  const handleAnswer = (answer) => {
    // const newIndex = currentIndex + 1;
    // setCurrentIndex(newIndex);
    if (!showAnwers) {
      //prevent double answers
      if (answer === questionsData[currentIndex].correct_answer) {
        //increase the score
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
    // if (newIndex >= questionsData.length) {
    //   setGameEnded(true);
    // }
  };
  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);

    if (currentIndex >= questionsData.length - 1) {
      setGameEnded(true);
    }
  };

  const handlePrevQuestion = () => {
    setShowAnswers(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return gameEnded ? (
    <div className="score-container">
      <div className="score-msg-card">
        <h1 className="score">Your score is {score}</h1>
      </div>
    </div>
  ) : questionsData !== null ? (
    <div className="test-container">
      <Quiz
        data={questionsData[currentIndex]}
        showAnswers={showAnwers}
        handleAnswer={handleAnswer}
        handleNextQuestion={handleNextQuestion}
        handlePrevQuestion={handlePrevQuestion}
      />
    </div>
  ) : (
    <h2 className="loading-msg"> Loading...</h2>
  );
};

export default Test;

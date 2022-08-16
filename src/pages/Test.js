import React, { useState, useEffect, useContext } from "react";
import "./Test.css";
import Quiz from "./Quiz";
import AuthContext from "./../pages/context/AuthProvider";
// import axios from "axios";

// const ApiUrl = "http://127.0.0.1:5000/questions";
const ApiUrl = "https://nail-practicer.herokuapp.com/questions";

const Test = () => {
  const [questionsData, setQuestions] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [showAnwers, setShowAnswers] = useState(false);
  const user = useContext(AuthContext);

  useEffect(() => {
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0, 5),
        }));
        setQuestions(questions);

        setCurrentIndex(0);

        console.log(data);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnwers) {
      //prevent double answers
      if (answer === questionsData[currentIndex].correct_answer) {
        //increase the score
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };
  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);

    if (currentIndex >= questionsData.length - 1) {
      setGameEnded(true);
      PostScore();
    }
  };

  const PostScore = () => {
    console.log("posting");
    if (user[0] === "") {
      return;
    }
    console.log("posting again");
    const url =
      "https://nail-practicer.herokuapp.com/users/" + user.auth[0] + "/score";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
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

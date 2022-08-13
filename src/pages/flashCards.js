import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "./FlashcardList";
import axios from "axios";
import "./flashCards.css";

const FlashCards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {}, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url =
      "http://127.0.0.1:5000/categories/" + categoryEl.current.value + "/cards";
    axios
      .get(url, {
        params: {
          amount: amountEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            // const options = [
            //   ...questionItem.incorrect_answer.map((a) => decodeString(a)),
            //   answer,
            // ];
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              // options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }

  return (
    <>
      <div className="flash-cards-page">
        {/* <div className="flash-c-text">
          <p>Here is explenation about how to use flash card</p>
        </div> */}
        <form className="flash-c-header" onSubmit={handleSubmit}>
          <div className="flash-c-form-group">
            <label htmlFor="flash-c-category">Category</label>
            <select id="category" ref={categoryEl}>
              {categories.map((category) => {
                return (
                  <option
                    value={category.category_id}
                    key={category.category_id}
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>
            <small>Pick category</small>
          </div>
          <div className="flash-c-form-group">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              id="amount"
              min="1"
              step="1"
              defaultValue={10}
              ref={amountEl}
            />
            <small>Pick how many cards</small>
          </div>
          <div className="flash-c-form-group">
            <button className="flash-c-btn">Generate</button>
          </div>
        </form>
        <div className="flash-c-list-container">
          <FlashcardList flashcards={flashcards} />
        </div>
      </div>
    </>
  );
};

export default FlashCards;

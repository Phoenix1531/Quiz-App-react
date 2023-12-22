import React, { useState } from "react";
import questions from "../questions";

export default function QuestionBox({
  theme,
  correctAns,
  setCorrect,
  setQuizend,
}) {
  const [question, setQuestion] = useState(0);
  const [High, setHigh] = useState(false);
  function QuestionClick() {
    if (question === questions.length - 1) {
      setQuizend(true);
    } else {
      setQuestion(question + 1);
    }
  }
  const buttonStyles = [
    {
      backgroundColor: "black",
      boxShadow: "0px 0px 20px 5px blue",
      border: "solid 2px white",
      color: "white",
    },
    {
      backgroundColor: "white",
      boxShadow: "0px 0px 5px 0px black",
      border: "solid 2px black",
      color: "black",
    },
  ];
  return (
    <div
      className="big-box"
      style={
        theme
          ? {
              backgroundColor: "black",
              boxShadow: "0px 0px 40px 10px blue ",
              border: "solid 2px white",
              color: "white",
            }
          : {
              backgroundColor: "white",
              boxShadow: "0px 0px 15px 0px black",
              border: "solid 2px black",
              color: "black",
            }
      }
    >
      <h1>
        Question: {question + 1} of {questions.length}
      </h1>
      <h1
        id="question"
        style={{
          color: High ? "red" : theme ? "white" : "black",
        }}
      >
        {questions[question].text}
      </h1>
      <div className="options">
        <button
          style={theme ? buttonStyles[0] : buttonStyles[1]}
          onClick={() => {
            {
              questions[question].options[0].isCorrect
                ? setCorrect(correctAns + 1)
                : setCorrect(correctAns);
            }
            QuestionClick();
          }}
        >
          {questions[question].options[0].text}
        </button>
        <button
          style={theme ? buttonStyles[0] : buttonStyles[1]}
          onClick={() => {
            {
              questions[question].options[1].isCorrect
                ? setCorrect(correctAns + 1)
                : setCorrect(correctAns);
            }
            QuestionClick();
          }}
        >
          {questions[question].options[1].text}
        </button>
        <button
          style={theme ? buttonStyles[0] : buttonStyles[1]}
          onClick={() => {
            {
              questions[question].options[2].isCorrect
                ? setCorrect(correctAns + 1)
                : setCorrect(correctAns);
            }
            QuestionClick();
          }}
        >
          {questions[question].options[2].text}
        </button>
        <button
          style={theme ? buttonStyles[0] : buttonStyles[1]}
          onClick={() => {
            {
              questions[question].options[3].isCorrect
                ? setCorrect(correctAns + 1)
                : setCorrect(correctAns);
            }
            QuestionClick();
          }}
        >
          {questions[question].options[3].text}
        </button>
      </div>
      <div className="btns">
        <button
          onClick={() => {
            setHigh(!High);
          }}
          style={
            theme
              ? {
                  backgroundColor: "black",
                  boxShadow: "0px 0px 20px 5px red",
                  border: "solid 2px white",
                  color: "white",
                }
              : {
                  backgroundColor: "white",
                  boxShadow: "0px 0px 5px 0px black",
                  border: "solid 2px black",
                  color: "black",
                }
          }
        >
          {High ? "Remove Highlight" : "Highlight"}
        </button>
      </div>
    </div>
  );
}

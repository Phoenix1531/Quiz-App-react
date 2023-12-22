import React from "react";
import questions from "../questions";
export default function Result({ theme, correctAns }) {
  return (
    <div
      className="small-box"
      style={
        theme
          ? {
              backgroundColor: "black",
              boxShadow: "0px 0px 40px 10px blue",
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
      <h1>Your Result</h1>
      <h1>
        {correctAns} out of 5 correct - ({correctAns * 20})%
      </h1>
      <button
        id="restart"
        onClick={() => {
          window.location.reload();
        }}
        style={
          theme
            ? {
                backgroundColor: "black",
                boxShadow: "0px 0px 20px 5px blue",
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
        Restart Quiz
      </button>
    </div>
  );
}

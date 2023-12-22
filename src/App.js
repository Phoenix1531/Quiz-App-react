import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [theme, setTheme] = useState(true);
  const [correctAns, setCorrect] = useState(0);
  const [QuizEnd, setQuizend] = useState(false);
  return (
    <div
      className="container"
      style={{backgroundColor:theme?"black":"white"}}
    >
      <button
        id="theme"
        onClick={() => {
          setTheme(!theme);
        }}
        style={
          theme
            ? {
              backgroundColor: "white",
              border: "solid 2px black",
              color: "black",
            }
            :
            {
                backgroundColor: "black",
                border: "solid 2px white",
                color: "white",
              }
        }
      >
        {theme ? "Light Theme" : "Dark Theme"}
      </button>

      {QuizEnd ? (
        <Result theme={theme} correctAns={correctAns} />
      ) : (
        <QuestionBox
          theme={theme}
          correctAns={correctAns}
          setCorrect={setCorrect}
          setQuizend={setQuizend}
        />
      )}
    </div>
  );
}

export default App;

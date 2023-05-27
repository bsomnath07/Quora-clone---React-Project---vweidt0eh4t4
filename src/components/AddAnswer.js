import React from "react";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../AddAnswer.css";


function AddAnswer({ handleAddAnswer, handleCancelAnswer }) {
  const [answerText, setAnswerText] = useState("");


  const handleAnswerChange = (event) => {
    setAnswerText(event.target.value);
  };

  const handleAddAnswerClick = () => {
    handleAddAnswer(answerText);
    setAnswerText("");
  };


  return (
    <div className="answercontainer"  >
      <textarea
        className="answerboxInput"
        placeholder="Type your answer here........."
        type="text"
        value={answerText}
        onChange={handleAnswerChange}
        style={{ backgroundColor: 'aliceblue' }}
      />
      <div className="answerButton">
        <button className="answerbtn" onClick={handleAddAnswerClick}>
          Add Answer
        </button>
        <button className="cancelbtn" onClick={handleCancelAnswer}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddAnswer;

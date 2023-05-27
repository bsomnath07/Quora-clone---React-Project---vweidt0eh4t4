import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useHistory, useLocation } from "react-router-dom";
import AddAnswer from "./AddAnswer";

import Login from "../Login";
import "../styles/AddQuestion.css";
function AddQuestion() {

  const [questionbox, setQuestionbox] = useState(true);
  const [newQuestion, setNewQuestion] = useState("");
  const [Questionlist, setQuestionlist] = useState([]);
  const [answerbox, setAnswerbox] = useState(false);
  const [AnswerList, setAnswerList] = useState([]);
  const [selectedQues, setSelectedques] = useState();

  const navigate = useNavigate();
  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
    setQuestionbox(true);
  };
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(Questionlist));
    const storedData = JSON.parse(localStorage.getItem("questions"));
  }, [Questionlist]);
  useEffect(() => {
    localStorage.setItem("ans", JSON.stringify(AnswerList));
    const storedData = JSON.parse(localStorage.getItem("questions"));
  }, [AnswerList]);

  const handleAddQuestion = () => {
    if (newQuestion !== "") {
      const newId = Questionlist.length
        ? Questionlist[Questionlist.length - 1].id + 1
        : 1;
      const newQuestions = [
        ...Questionlist,
        { id: newId, questn: newQuestion },
      ];
      setQuestionlist(newQuestions);
      console.log(newQuestions, Questionlist);

      // console.log(storedData);
      console.log(storedData, "local storage data");
      setQuestionbox(false);
      //console.log(newQuestions,"newQuestions");
    }
  };

  //console.log( newQuestion,"newQuestion");
  const handleAnswerQuestion = (index) => {
    setSelectedques(index);
    setAnswerbox(true);
    // console.log("question")
  };

  const handleAddAnswer = (answerText) => {
    if (answerText !== "") {
      const newId = AnswerList.length
        ? AnswerList[AnswerList.length - 1].id + 1
        : 1;
      const newAnswers = [...AnswerList, { id: selectedQues, ans: answerText }];
      setAnswerList(newAnswers);
      // const newAnswers = [...AnswerList, answerText];
      // setAnswerList(newAnswers);
    }
    setAnswerbox(false);
    //  setAnswerbox(true);
  };
  const handleCancelQuestion = () => {
    setQuestionbox(false);
    // setQuestionbox(true);
  }


  const handleCancelAnswer = () => {
    setAnswerbox(false);
  };

  return (
    <div className="add-question-container">
      {/* <Navbar questionbox={questionbox} setQuestionbox={setQuestionbox} /> */}
      {questionbox === true && (
        <>
          <textarea
            className="searchquestionbar"
            placeholder="Type your question here....."
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <br />
          <div className="buttonContainer">
            <button className="addquestionbtn" onClick={handleAddQuestion}>
              Add Question
            </button>

            <button className="addquestionbtn" onClick={handleCancelQuestion}>
              Cancel
            </button>
          </div>
        </>
      )}
      <div className="grid-container">
        <div className="ques-ans-container" style={{ whiteSpace: "pre-wrap" }}>
          {Questionlist?.map((question, index) => {
            return (
              <>
                {" "}
                <ul>
                  <li
                    className="questionText"
                    onClick={() => handleAnswerQuestion(index + 1)}
                    key={index}
                    style={{ gridColumn: 2 }}
                  >
                    <h6>
                      {" "}
                      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                        {" "}
                        Question ({index + 1}):{" "}
                      </span>{" "}
                      {question.questn}{" "}
                    </h6>
                  </li>
                </ul>
                <div className="answerText">
                  {AnswerList?.map((answer, idx) => {
                    return (
                      answer?.id === index + 1 && (
                        <h6 className="answer" key={idx}>
                          {" "}
                          <h6>
                            {" "}
                            <span
                              style={{ fontWeight: "bold", fontSize: "16px" }}
                            >
                              answer :-{" "}
                            </span>
                            {answer.ans}{" "}
                          </h6>
                        </h6>
                      )
                    );
                  })}
                </div>
                <br />
              </>
            );
          })}
        </div>
      </div>
      {answerbox === true && (
        <AddAnswer
          handleAddAnswer={handleAddAnswer}
          handleCancelAnswer={handleCancelAnswer}
        />
      )}
    </div>
  );
}

export default AddQuestion;

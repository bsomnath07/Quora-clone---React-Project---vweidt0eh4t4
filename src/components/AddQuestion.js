import React from 'react'
import { useState } from 'react';
import { Placeholder } from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import "../styles/AddQuestion.css";

function AddQuestion({ questions, setQuestions,setShowAddQuestion,handleCancel}) {
  const [newQuestion, setNewQuestion] = useState("");
  const [Questionlist,setQuestionlist]=useState([]);
  const[answerbox,setAnswerbox]=useState(false);
 const history = useHistory();

  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  }

  const handleAddQuestion = () => {
    if (newQuestion !== "") {
      
      const newQuestions = [...Questionlist, newQuestion];
      setQuestionlist(newQuestions);
    }
    //console.log(newQuestion)
   history.push("/add-question");
  }

const  handleAnswerQuestion=()=>{
  setAnswerbox(true)
 // console.log("question")
}


  // const handleCancel = () => {
  //   setQuestions(false)
  //  setShowAddQuestion(false)
  
  // }



  return (
    <>
    <div>
    
      <input className="searchquestionbar" placeholder='Type tour question here.....' type="text" value={newQuestion} onChange={handleQuestionChange} /><br/>
      <div className='buttonContainer' >
      <button className="addquestionbtn" onClick={handleAddQuestion}>Add Question</button>
      <button  className="addquestionbtn" onClick={handleCancel}>Cancel</button>
      {
        Questionlist.map((question, index) => {
       return<> <li onClick={handleAnswerQuestion} key={index}>{question}</li><br/></>;
        })
      }
      </div>
      <div className='answerContainer'>
      {
        answerbox==true &&   <input  className='answerboxInput' placeholder="Type your answer here........." />
      }
      {
        answerbox==true && <div className='answerButton'> <button className='answer'> Add Answer</button>  <button className='cancel'>Cancel</button> </div>
      }
      </div>
    </div>
    </>
  );
}
export default AddQuestion
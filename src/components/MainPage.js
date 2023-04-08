import React, { useState } from 'react';
import AddQuestion from './AddQuestion';
import { Link,useHistory } from 'react-router-dom';
function MainPage() {
  const history = useHistory();

 const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  // const handleAddQuestionClick = () => {
  //   setShowAddQuestion(false);
  // };

  const handleAddQuestion = (newQuestion) => {

    setQuestions([...questions, newQuestion]);
   // setShowAddQuestion(false);
    setShowAddQuestion(true);
  };

  const onHandleCancel = () => {
    setShowAddQuestion(false);
    history.push("/");
    console.log("cancel");

  };


  return (
    <div>
      {showAddQuestion && (
        <AddQuestion
          questions={questions}
          setQuestions={setQuestions}
          handleAddQuestion={handleAddQuestion}
          handleCancel={onHandleCancel}
        />
      )}

      {questions.length > 0 && (
        <div>
          <h2>Questions:</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MainPage;

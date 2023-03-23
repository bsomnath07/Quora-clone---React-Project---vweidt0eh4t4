import React, { useState } from 'react';
import AddQuestion from './AddQuestion';

function MainPage() {
  const [questions, setQuestions] = useState([]);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const handleAddQuestionClick = () => {
    setShowAddQuestion(true);
  };

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    setShowAddQuestion(false);
  };

  const handleCancelQuestion = () => {
    setShowAddQuestion(false);
  };

  return (
    <div>
      {showAddQuestion && (
        <AddQuestion
          questions={questions}
          setQuestions={setQuestions}
          handleAddQuestion={handleAddQuestion}
          handleCancelQuestion={handleCancelQuestion}
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

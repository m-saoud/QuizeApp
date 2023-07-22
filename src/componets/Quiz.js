import React, { useState } from "react";
import QuizData from "../QuizData";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to handle form submission when the user selects an option
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userAnswer = formData.get("option");
    setUserAnswers([...userAnswers, userAnswer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  // Function to check if the user's answer is correct

  const isAnswerCorrect = () => {
    const currentQuestion = QuizData[currentQuestionIndex];
    return userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer;
  };

  // Function to render the quiz questions and options
  const renderQuizContent = () => {
    if (currentQuestionIndex < QuizData.length) {
      const currentQuestion = QuizData[currentQuestionIndex];
      return (
        <form onSubmit={handleFormSubmit}>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              <label>
                <input type="radio" name="option" value={option} />
                {option}
              </label>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      );
    } else {
      return renderQuizResults();
    }
  };
  return <div></div>;
};

export default Quiz;

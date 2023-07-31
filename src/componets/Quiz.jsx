import React, { useState } from "react";
import QuizData from "../QuizData";
import "./Quiz.css";

const Quiz = ({ quizData }) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Function to handle form submission when the user selects an option
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userAnswer = formData.get("option");
    setUserAnswers([...userAnswers, userAnswer]);

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    // Delaying the state update to allow showing the correctness message
    setTimeout(() => {
      // Check if all questions have been answered
      if (currentQuestionIndex === quizData.length - 1) {
        setShowResults(true);
      } else {
        setIsCorrect(null); // Reset isCorrect value for the next question
      }
    }, 1500); // Delay for 1.5 seconds to show the correctness message
  };

  // Function to check if the user's answer is correct for a specific question
  const isAnswerCorrect = (questionIndex) => {
    const currentQuestion = quizData[questionIndex];
    return userAnswers[questionIndex] === currentQuestion.correctAnswer;
  };

  // Function to render the quiz questions and options
  const renderQuizContent = () => {
    if (currentQuestionIndex < quizData.length) {
      const currentQuestion = quizData[currentQuestionIndex];

      return (
        <>
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
            {isCorrect !== null && (
              <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>
            )}
            <button type="submit">Submit</button>
          </form>
        </>
      );
    } else {
      return renderQuizResults();
    }
  };

  // Function to render the quiz results after the quiz is completed
  const renderQuizResults = () => {
    let score = 0;
    return (
      <div>
        <h2>Quiz Results</h2>
        {quizData.map((question, index) => {
          const isCorrect = userAnswers[index] === question.correctAnswer;
          if (isCorrect) {
            score++;
          }
          return (
            <div key={index}>
              <p>{question.question}</p>
              <p>Selected Answer: {userAnswers[index]}</p>
              <p>Correct Answer: {question.correctAnswer}</p>
              <p className={isCorrect ? "correct" : "incorrect"}>
                {isCorrect ? "Correct!" : "Incorrect!"}
              </p>
            </div>
          );
        })}
        <p>
          Total Score: {score} out of {quizData.length}
        </p>
        <button onClick={resetQuiz}>Restart Quiz</button>
      </div>
    );
  };

  // Function to reset the quiz and start again
  const resetQuiz = () => {
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setIsCorrect(null);
    setShowResults(false);
  };

  return (
    <div className="quiz-container">
      {showResults ? renderQuizResults() : renderQuizContent()}
    </div>
  );
};

export default Quiz;
;

import React from "react";
import Quiz from "./componets/Quiz";

const QuizData = () => {
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of USA?",
      options: ["London", "Berlin", "W.D", "Madrid"],
      correctAnswer: "W.D",
    },
    {
      question: "What is the capital of Syria?",
      options: ["London", "Damascus", "Paris", "Madrid"],
      correctAnswer: "Damascus",
    },
  ];

  return (
    <div>
      <h1>Quiz App</h1>
      <Quiz quizData={quizData} />
    </div>
  );
};

export default QuizData;

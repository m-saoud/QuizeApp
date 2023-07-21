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

        const currentQuestion=QuizData[currentQuestionIndex]
    }


  return <div></div>;
};

export default Quiz;

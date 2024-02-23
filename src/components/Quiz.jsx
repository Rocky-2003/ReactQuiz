import { useState, useCallback } from "react";

import QUESTION from "../questions.js";
import Question from "./Question.jsx";

import quizTrophyImage from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setuserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setuserAnswers((preAnswer) => {
      // if (preAnswer.length >= 6) {
      //   return [];
      // }
      return [...preAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, []);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizTrophyImage} alt="Trophy Image" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

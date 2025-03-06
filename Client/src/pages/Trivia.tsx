import React, { useState } from "react";
import "../styles/Trivia.css";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const triviaQuestions: Question[] = [
  {
    question: "Which country is the birthplace of golf?",
    options: ["Scotland", "USA", "Ireland", "Canada"],
    correctAnswer: "Scotland",
  },
  {
    question: "Who holds the record for the most PGA Tour wins?",
    options: ["Tiger Woods", "Jack Nicklaus", "Sam Snead", "Arnold Palmer"],
    correctAnswer: "Sam Snead",
  },
  {
    question: "What is the term for a score of one stroke under par?",
    options: ["Birdie", "Eagle", "Bogey", "Albatross"],
    correctAnswer: "Birdie",
  },
];

const Trivia: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < triviaQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      alert(`Trivia Complete! You scored ${score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)} out of 3.`);
    }
  };

  return (
    <div className="app-container">
      <h1>Golf Trivia Challenge</h1>
      <div className="question-container">
        <p>{currentQuestion.question}</p>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`option-button ${selectedAnswer === option ? "selected" : ""}`}
            >
              {option}
            </button>
          ))}
        </div>
        <button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="submit-button">
          Submit Answer
        </button>
      </div>
      <footer> FOOOORREEEEEEE!!!!!!</footer>
    </div>
  );
};

export default Trivia;

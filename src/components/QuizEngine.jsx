import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questions';

const QuizEngine = () => {
  const navigate = useNavigate();
  const player = JSON.parse(localStorage.getItem('currentPlayer'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [answers, setAnswers] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const questions = questionsData[player.category]?.[player.difficulty] || [];

  useEffect(() => {
    if (!player || questions.length === 0) navigate('/start');
  }, []);

  useEffect(() => {
    if (timer === 0) handleNext();
    const id = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleOptionClick = (option) => {
  if (disabled) return;

  setSelectedOption(option);
  setDisabled(true);

  const correct = questions[currentIndex].answer;
  const timeTaken = 15 - timer;
  const isCorrect = option === correct;

  if (isCorrect) setScore((prev) => prev + 1);

  const answerData = {
    question: questions[currentIndex].question,
    selected: option,
    correct,
    isCorrect,
    timeTaken,
  };

  setAnswers((prev) => [...prev, answerData]);

  setTimeout(() => {
    if (currentIndex + 1 === questions.length) {
      // 🛠 Finalize and save all state properly
      const finalScore = isCorrect ? score + 1 : score; // if you prefer explicit final count
      const finalAnswers = [...answers, answerData];
      const result = {
        ...player,
        score: finalScore,
        totalQuestions: questions.length,
        answers: finalAnswers,
        timeTaken: finalAnswers.reduce((acc, ans) => acc + ans.timeTaken, 0),
        date: new Date().toLocaleString(),
      };
      const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
      localStorage.setItem('quizHistory', JSON.stringify([...history, result]));
      navigate('/summary');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setTimer(15);
      setDisabled(false);
    }
  }, 1000);
};


  const handleNext = () => {
    if (currentIndex + 1 === questions.length) {
      const result = {
        ...player,
        score,
        totalQuestions: questions.length,
        answers,
        timeTaken: answers.reduce((acc, ans) => acc + ans.timeTaken, 0),
        date: new Date().toLocaleString(),
      };
      const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
      localStorage.setItem('quizHistory', JSON.stringify([...history, result]));
      navigate('/summary');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setTimer(15);
      setDisabled(false);
    }
  };

  if (!questions.length) return <p>Loading questions...</p>;

  const current = questions[currentIndex];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Question {currentIndex + 1}/{questions.length}</h2>
      <p className="mb-4 text-lg">{current.question}</p>

      <div className="space-y-3 w-full max-w-lg">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            className={`block w-full px-4 py-2 rounded border transition ${
              selectedOption
                ? opt === current.answer
                  ? 'bg-green-400 text-white'
                  : opt === selectedOption
                  ? 'bg-red-400 text-white'
                  : 'bg-gray-200'
                : 'bg-blue-100 hover:bg-blue-200'
            }`}
            disabled={disabled}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-600">Time Remaining: {timer}s</p>
      </div>
    </main>
  );
};

export default QuizEngine;

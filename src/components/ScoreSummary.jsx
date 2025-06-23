import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const navigate = useNavigate();
  const player = JSON.parse(localStorage.getItem('currentPlayer'));
  const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
  const result = history[history.length - 1];

  const getMessage = (score, total) => {
    const percent = (score / total) * 100;
    if (percent === 100) return "🎉 Quiz Champion!";
    if (percent >= 80) return "🔥 Amazing Job!";
    if (percent >= 50) return "👍 Good effort!";
    return "☕ More caffeine, maybe?";
  };

  const handlePlayAgain = () => {
    localStorage.removeItem('currentPlayer');
    navigate('/start');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-slate-50">
      <div className="max-w-xl bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Quiz Summary</h2>

        <p className="text-xl mb-2">Player: <strong>{result.name}</strong></p>
        <p className="mb-2">Score: <strong>{result.score} / {result.totalQuestions}</strong></p>
        <p className="mb-2">Total Time Taken: <strong>{result.timeTaken} seconds</strong></p>
        <p className="mb-4 text-lg font-medium text-green-600">{getMessage(result.score, result.totalQuestions)}</p>

        <button
          onClick={handlePlayAgain}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition"
        >
          Play Again
        </button>
      </div>
    </main>
  );
};

export default ScoreSummary;
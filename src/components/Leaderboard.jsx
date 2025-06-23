import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [entries, setEntries] = useState([]);
  const [sortBy, setSortBy] = useState('score');

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    setEntries([...history]);
  }, []);

  const sortEntries = (key) => {
    const sorted = [...entries].sort((a, b) => {
      if (key === 'score') return b.score - a.score;
      if (key === 'time') return a.timeTaken - b.timeTaken;
      return 0;
    });
    setEntries(sorted);
    setSortBy(key);
  };

  return (
    <main className="p-20 min-h-screen bg-slate-100">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Leaderboard</h2>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${sortBy === 'score' ? 'bg-blue-700 text-white' : 'bg-white border'}`}
          onClick={() => sortEntries('score')}
        >
          Sort by Score
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === 'time' ? 'bg-blue-700 text-white' : 'bg-white border'}`}
          onClick={() => sortEntries('time')}
        >
          Sort by Time
        </button>
      </div>

      {entries.length === 0 ? (
        <p className="text-center text-gray-600">No quiz attempts yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 text-left">Player</th>
                <th className="px-4 py-2 text-left">Score</th>
                <th className="px-4 py-2 text-left">Time Taken (s)</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.score}</td>
                  <td className="px-4 py-2">{entry.timeTaken}</td>
                  <td className="px-4 py-2">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default Leaderboard;

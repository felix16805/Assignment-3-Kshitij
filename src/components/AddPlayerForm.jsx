import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlayerForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const playerData = {
      name,
      category,
      difficulty,
      startTime: new Date().toISOString(),
    };

    console.log(playerData);
    localStorage.setItem('currentPlayer', JSON.stringify(playerData));
    navigate("/quiz/start");

  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Get Ready to Quiz!</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-inherit rounded-lg p-6 space-y-4 shadow-2xl ">
        <div>
          <label className="block font-semibold mb-1">Player Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">-- Select Category --</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Science">Science</option>
            <option value="Sports">Sports</option>
            <option value="History">History</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">-- Select Difficulty --</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!name || !category || !difficulty}
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 disabled:opacity-50"
        >
          Start Quiz
        </button>
      </form>
    </main>
  );
};

export default AddPlayerForm;

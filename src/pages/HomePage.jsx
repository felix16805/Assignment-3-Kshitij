import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20 bg-gradient-to-br from-blue-100 to-white min-h-screen">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-blue-800">Welcome to Quizzer!</h2>
        <p className="text-lg text-gray-700">Test your knowledge across multiple categories and climb the leaderboard.</p>
        <br></br>
        <Link to="/start">
          <button className="px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 rounded-md transition">Start Quiz</button>
        </Link>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 animate-float">
        <img src="https://cdn-icons-png.flaticon.com/128/3983/3983670.png" alt="Quiz Illustration" className="w-75% max-w-md mx-auto" />
      </div>
    </main>
  );
};

export default HomePage;

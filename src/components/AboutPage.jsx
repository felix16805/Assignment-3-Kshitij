import React from 'react';

const AboutPage = () => {
  return (
    <main className="p-20 bg-white min-h-screen flex flex-col items-center justify-start">
      <div className="max-w-3xl space-y-6 text-center">
        <h2 className="text-4xl font-bold text-blue-800">About This App</h2>

        <p className="text-lg text-gray-700">
          This is an <strong>Interactive Quiz App</strong> built using <span className="text-blue-700 font-medium">ReactJS</span>, as part of the
          Kshitij Web Development and AI Workshop 2025.
        </p>

        <div className="text-left text-gray-800 space-y-4">
          <h3 className="text-2xl font-semibold">🔧 Tech Stack:</h3>
          <ul className="list-disc ml-5">
            <li>ReactJS (Functional Components)</li>
            <li>React Router DOM for routing</li>
            <li>Tailwind CSS for styling</li>
            <li>LocalStorage for persistence</li>
          </ul>

          <h3 className="text-2xl font-semibold">📚 Features Implemented:</h3>
          <ul className="list-disc ml-5">
            <li>Player form with category and difficulty</li>
            <li>Question-by-question quiz with timer</li>
            <li>Score tracking and analysis</li>
            <li>Leaderboard sorted by score/time</li>
            <li>Responsive and mobile-friendly UI</li>
          </ul>

          <h3 className="text-2xl font-semibold">💡 Learnings:</h3>
          <ul className="list-disc ml-5">
            <li>React component design and state management</li>
            <li>Persisting user data in localStorage</li>
            <li>Implementing routing with React Router</li>
            <li>Using Tailwind for responsive design</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">😄 Here's a meme to keep it fun:</h3>
          <img
            src="https://i.imgflip.com/4/4t0m5.jpg"
            alt="Coding Meme"
            className="mx-auto rounded-lg shadow-md max-w-md"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

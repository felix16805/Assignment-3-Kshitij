import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'; 
import HomePage from './pages/HomePage';
import AddPlayerForm from './components/AddPlayerForm';
import QuizEngine from './components/QuizEngine';
import ScoreSummary from './components/ScoreSummary';
import Leaderboard from './components/Leaderboard';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<AddPlayerForm />} />
        <Route path="/quiz/start" element={<QuizEngine />} />
        <Route path="/summary" element={<ScoreSummary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h2 className="text-center mt-20 text-2xl text-red-600">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

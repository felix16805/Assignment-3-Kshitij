import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-700 text-white z-50 shadow-xl">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          <Link to="/">Quizzer</Link>
        </h1>
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/start" className="hover:underline">Start Quiz</Link>
          <Link to="/leaderboard" className="hover:underline">Scores</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-blue-600 px-6 pb-4 flex flex-col space-y-4 text-lg">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/start" onClick={toggleMenu}>Start Quiz</Link>
          <Link to="/leaderboard" onClick={toggleMenu}>Scores</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;

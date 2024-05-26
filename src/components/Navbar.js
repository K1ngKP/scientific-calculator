import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Mathemagics
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="text-white hover:text-gray-200 transition-colors duration-300">
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/equation-solver" className="text-white hover:text-gray-200 transition-colors duration-300">
              Equation Solver
            </Link>
          </li>
          <li>
            <Link to="/sudoku-solver" className="text-white hover:text-gray-200 transition-colors duration-300">
              Sudoku Solver
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

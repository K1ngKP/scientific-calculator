// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex">
          <li className="mr-6">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/calculator" className="text-white hover:text-gray-200">
              Calculator
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/equation-solver" className="text-white hover:text-gray-200">
              Equation Solver
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/sudoku-solver" className="text-white hover:text-gray-200">
              Sudoku Solver
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

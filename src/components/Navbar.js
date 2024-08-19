import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Mathemagics
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "font-semibold font-family:Cambria text-fuchsia-900 text-2xl hover:text-fuchsia-600 transition-colors duration-300" : "font-family:Cambria text-white text-2xl hover:text-fuchsia-600 transition-colors duration-300")} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/calculator" className={({ isActive }) => (isActive ? "font-semibold font-family:Cambria text-fuchsia-900 text-2xl hover:text-fuchsia-600 transition-colors duration-300" : "font-family:Cambria text-white text-2xl hover:text-fuchsia-600 transition-colors duration-300")} >
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/equation-solver" className={({ isActive }) => (isActive ? "font-semibold font-family:Cambria text-fuchsia-900 text-2xl hover:text-fuchsia-600 transition-colors duration-300" : "font-family:Cambria text-white text-2xl hover:text-fuchsia-600 transition-colors duration-300")} >
              Equations
            </NavLink>
          </li>
          <li>
            
            <NavLink to="/sudoku-solver" className={({ isActive }) => (isActive ? "font-semibold font-family:Cambria text-fuchsia-900 text-2xl hover:text-fuchsia-600 transition-colors duration-300" : "font-family:Cambria text-white text-2xl hover:text-fuchsia-600 transition-colors duration-300")} >
              Sudoku Solver
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

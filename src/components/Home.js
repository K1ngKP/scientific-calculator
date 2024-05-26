import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col justify-center items-center p-10">
      <div className="animate-fade-in text-center">
        <h1 className="text-5xl font-bold mb-8">Welcome to the world of Maths.</h1>
        <p className="text-2xl mb-12">
          This app offers a variety of tools to help you with your calculations. Choose an option from the navigation menu to get started.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/calculator">
            <div className="bg-white text-blue-500 text-center p-8 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Calculator</h2>
              <p className="text-lg">Perform basic and scientific calculations with ease.</p>
            </div>
          </Link>
          <Link to="/equation-solver">
            <div className="bg-white text-blue-500 text-center p-8 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Equation Solver</h2>
              <p className="text-lg">Solve linear equations quickly and accurately with this.</p>
            </div>
          </Link>
          <Link to="/sudoku-solver">
            <div className="bg-white text-blue-500 text-center p-8 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Sudoku Solver</h2>
              <p className="text-lg">Get solutions for Sudoku puzzles instantly if it is valid.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

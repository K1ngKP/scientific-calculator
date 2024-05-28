
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import QuadraticSolver from './EquationComp/QuadraticSolver';
import LinearSolver from './EquationComp/LinearSolver';
import CubicSolver from './EquationComp/CubicSolver'; 

const EquationSolver = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col justify-center items-center p-10 overflow-">
      <div className="animate-fade-in text-center">
        <h1 className="text-4xl font-bold mb-6">Equation Solver</h1>
        <p className="text-lg mb-8">
          Choose an equation type to get started.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/equation-solver/linear">
            <div className="bg-white text-blue-500 text-center p-6 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Linear Equations</h2>
              <p className="text-sm">Solve linear equations of upto 5 variables.</p>
            </div>
          </Link>

          <Link to="/equation-solver/quadratic">
            <div className="bg-white text-blue-500 text-center p-6 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Quadratic Equations</h2>
              <p className="text-sm">Solve quadratic equations effortlessly.</p>
            </div>
          </Link>
          
          <Link to="/equation-solver/cubic">
            <div className="bg-white text-blue-500 text-center p-6 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Cubic Equations</h2>
              <p className="text-sm">Solve cubic equations with ease.</p>
            </div>
          </Link>
          
        </div>
      </div>
      <Routes>
      <Route path="linear" element={<LinearSolver />} />
        <Route path="quadratic" element={<QuadraticSolver />} />
        <Route path="cubic" element={<CubicSolver />} /> 
      </Routes>
    </div>
  );
};

export default EquationSolver;


import React, { useState } from 'react';

const LinearSolver = () => {
  const [numVariables, setNumVariables] = useState(1);
  const [coefficients, setCoefficients] = useState(Array(numVariables).fill(0));
  const [constants, setConstants] = useState(0);
  const [solution, setSolution] = useState('');

  const handleNumVariablesChange = (e) => {
    const value = parseInt(e.target.value);
    setNumVariables(value);
    setCoefficients(Array(value).fill(0));
  };

  const handleCoefficientChange = (e, index) => {
    const value = parseFloat(e.target.value);
    const newCoefficients = [...coefficients];
    newCoefficients[index] = value;
    setCoefficients(newCoefficients);
  };

  const solveLinearEquation = () => {
    
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">Linear Equations Solver</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <label className="text-lg">Number of Variables:</label>
          <select value={numVariables} onChange={handleNumVariablesChange}>
            {[2, 6, 12, 20, 30].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        {coefficients.map((coefficient, index) => (
          <div key={index} className="flex items-center gap-2">
            <label className="text-lg">{`Coefficient ${index + 1}:`}</label>
            <input
              type="number"
              value={coefficient}
              onChange={(e) => handleCoefficientChange(e, index)}
              style={{ color: 'black' }}
            />
          </div>
        ))}
        <div className="flex items-center gap-2">
          <label className="text-lg">Constant Term:</label>
          <input
            type="number"
            value={constants}
            onChange={(e) => setConstants(parseFloat(e.target.value))}
            style={{ color: 'black' }}
          />
        </div>
        <button onClick={solveLinearEquation} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Solve
        </button>
        <div className="mt-4">
          {solution && <p className="text-lg">{solution}</p>}
        </div>
      </div>
    </div>
  );
};

export default LinearSolver;

import React, { useState } from 'react';

const QuadraticSolver = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const handleSolve = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setResult('Please enter valid numbers for a, b, and c.');
      return;
    }

    const discriminant = bNum * bNum - 4 * aNum * cNum;
    if (discriminant < 0) {
      setResult('No real roots.');
    } else if (discriminant === 0) {
      const root = -bNum / (2 * aNum);
      setResult(`One real root: x = ${root}`);
    } else {
      const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      setResult(`Two real roots: x1 = ${root1}, x2 = ${root2}`);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col justify-center items-center p-6">
      <div className="animate-fade-in text-center bg-white text-blue-500 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Quadratic Equation Solver</h1>
        <div className="mb-3">
          <label className="block text-indigo-700 text-lg font-semibold mb-1">a:</label>
          <input
            type="text"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="py-1 px-2 rounded-lg shadow bg-white border border-gray-300 w-full"
          />
        </div>
        <div className="mb-3">
          <label className="block text-indigo-700 text-lg font-semibold mb-1">b:</label>
          <input
            type="text"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="py-1 px-2 rounded-lg shadow bg-white border border-gray-300 w-full"
          />
        </div>
        <div className="mb-3">
          <label className="block text-indigo-700 text-lg font-semibold mb-1">c:</label>
          <input
            type="text"
            value={c}
            onChange={(e) => setC(e.target.value)}
            className="py-1 px-2 rounded-lg shadow bg-white border border-gray-300 w-full"
          />
        </div>
        <button
          onClick={handleSolve}
          className="bg-blue-500 text-white text-lg font-semibold py-1 px-4 rounded-lg shadow hover:bg-blue-700 transition-all"
        >
          Solve
        </button>
        {result && (
          <div className="mt-4 p-3 bg-indigo-100 text-indigo-700 rounded-lg shadow-lg">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuadraticSolver;

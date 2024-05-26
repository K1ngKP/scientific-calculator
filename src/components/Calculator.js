import React, { useState } from 'react';
import Display from './CalculatorAssets/Display';
import ButtonPanel from './CalculatorAssets/ButtonPanel';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (label) => {
    if (label === 'AC') {
      setInput('');
      setResult('');
      return;
    }

    if (label === 'DEL') {
      setInput(input.slice(0, -1));
      return;
    }

    if (label === '=') {
      try {
        let expression = input;
        expression = expression.replace(/sin/g, 'Math.sin');
        expression = expression.replace(/cos/g, 'Math.cos');
        expression = expression.replace(/tan/g, 'Math.tan');
        expression = expression.replace(/log/g, 'Math.log');
        expression = expression.replace(/sqrt/g, 'Math.sqrt');
        expression = expression.replace(/exp/g, 'Math.exp');
        expression = expression.replace(/π/g, 'Math.PI');
        expression = expression.replace(/\^/g, '**');
        
        const evaluated = eval(expression);
        setResult(evaluated.toString());
        setInput(evaluated.toString());
      } catch (error) {
        setResult('Error');
      }
      return;
    }

    if (['sin', 'cos', 'tan', 'log', 'sqrt', 'exp'].includes(label)) {
      setInput(input + label + '(');
      return;
    }

    if (label === '(' || label === ')') {
      setInput(input + label);
      return;
    }

    setInput(input + label);
  };

  return (
    <div className="flex bg-gradient-to-r from-indigo-300 to-blue-300 min-h-screen items-start pt-20">
      <div className="fixed left-4 top-16 p-4 bg-indigo-300 w-[50vw] h-[75vh] rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-700">Scientific Calculator</h2>
        <Display value={input || result || '0'} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;

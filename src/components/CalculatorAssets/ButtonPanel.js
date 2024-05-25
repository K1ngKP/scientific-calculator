import React from 'react';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => {
  const buttons = [
    'AC', 'DEL', '(', ')', 
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'sin', 'cos', 'tan', 'log', 'sqrt', 'exp', 'π'
  ];

  return (
    <div className="grid grid-cols-4 gap-4 w-full max-w-lg mt-8">
      {buttons.map((label) => (
        <Button key={label} label={label} onClick={handleClick} />
      ))}
    </div>
  );
};

export default ButtonPanel;

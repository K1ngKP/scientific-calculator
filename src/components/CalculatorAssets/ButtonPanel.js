import React from 'react';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => {
  const buttons = [
    '7', '8', '9', 'DEL', 'AC',
    '4', '5', '6', '*', '/',
    '1', '2', '3', '+', '-',
    '0', '.', '=', '(', ')',
    'sin', 'cos', 'tan', 'log', 'sqrt',
    'exp', 'pi', '^'
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {buttons.map(button => (
        <Button key={button} label={button} onClick={handleClick} />
      ))}
    </div>
  );
};

export default ButtonPanel;

import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white text-lg py-3 px-4 m-1 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;

import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-gradient-to-r from-[#7091E6] to-[#3D52A0] text-white text-lg py-3 px-6 rounded-full shadow-md hover:scale-105 transform transition-transform duration-300 focus:outline-none focus:ring focus:ring-blue-400"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;

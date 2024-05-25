import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-[#7091E6] text-white text-lg py-2 rounded-md hover:bg-[#3D52A0] transition-colors w-14 h-14 m-1"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;

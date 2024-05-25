import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="w-full bg-[#8697C4] text-right text-2xl text-white py-4 px-2 rounded-lg mb-4">
      {value}
    </div>
  );
};

export default Display;

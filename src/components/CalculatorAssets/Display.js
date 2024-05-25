import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="w-full bg-white text-right text-3xl p-4 rounded-lg shadow-md">
      {value}
    </div>
  );
};

export default Display;

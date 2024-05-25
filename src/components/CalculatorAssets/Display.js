import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="bg-[#222] text-white text-right p-4 rounded-md mb-4 text-xl overflow-hidden">
      {value}
    </div>
  );
};

export default Display;

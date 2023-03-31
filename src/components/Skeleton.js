import React from "react";

const Skeleton = ({ width, height }) => {

  return (
    <div
      className="bg-gray-200 rounded-lg p-1 animate-pulse"
      style={{ width, height }}
    >
      
    </div>
  );
};

export default Skeleton;

import React from "react";

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;

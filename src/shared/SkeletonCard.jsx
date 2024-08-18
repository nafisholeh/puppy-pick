import React from "react";

const SkeletonCard = ({ className, ...props }) => {
  return <div className={`w-full h-14 bg-gray-300 rounded-lg animate-pulse ${className}`} {...props}></div>;
};

export default SkeletonCard;

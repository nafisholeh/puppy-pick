import React from "react";

const StepIndicator = ({ state = "inactive", title, description }) => {
  const getIcon = () => {
    switch (state) {
      case "active":
        return (
          <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
            </div>
          </div>
        );
      case "completed":
        return (
          <div className="w-10 h-10 border-2 border-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-6 h-6 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        );
      case "inactive":
      default:
        return (
          <div className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center flex-shrink-0"></div>
        );
    }
  };

  const getTextClasses = () => {
    switch (state) {
      case "active":
        return "text-true-gray-700 ";
      case "completed":
        return "text-yellow-600";
      case "inactive":
      default:
        return "text-black-30";
    }
  };

  const getDescriptionClasses = () => {
    switch (state) {
      case "inactive":
        return "text-black-30";
      default:
        return "text-true-gray-700";
    }
  };

  return (
    <div className="flex items-start space-x-4 mb-5">
      {getIcon()}
      <div className="flex flex-col">
        <div className={`text-base font-medium ${getTextClasses()}`}>{title}</div>
        {description && <div className={`text-sm font-normal ${getDescriptionClasses()}`}>{description}</div>}
      </div>
    </div>
  );
};

export default StepIndicator;

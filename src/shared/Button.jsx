import React from "react";

import loadingIcon from "../assets/images/hour-glass.png";
import chevronRight from "../assets/images/chevron-right.png";

const Button = ({ children, onClick, state, disabled = false, ...buttonProps }) => {
  const baseClasses =
    "flex items-center justify-center px-6 py-3 gap-4 text-black text-lg font-medium rounded-lg bg-yellow-600 hover:bg-yellow-800";

  const stateClasses = {
    loading: "cursor-wait",
    disabled: "!bg-yellow-100 text-gray-500 cursor-not-allowed hover:bg-yellow-100",
  };

  const getButtonContent = () => {
    if (state === "loading") {
      return (
        <div className="flex items-center justify-center gap-2">
          <span>Loading</span>
          <img src={loadingIcon} className="w-6" />
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center gap-2">
        <span>{children}</span>
        <img src={chevronRight} className="w-6" />
      </div>
    );
  };

  return (
    <button
      onClick={onClick}
      {...buttonProps}
      disabled={disabled || state === "loading"}
      className={`${baseClasses} ${stateClasses[state]} ${disabled ? stateClasses["disabled"] : ""}`}>
      {getButtonContent()}
    </button>
  );
};

export default Button;

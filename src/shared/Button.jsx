import React from "react";
import loadingIcon from "../assets/images/hour-glass.png";
import chevronRight from "../assets/images/chevron-right.png";

const Button = ({ children, onClick, state = "default", ...buttonProps }) => {
  const baseClasses =
    "flex items-center justify-center px-6 py-3 gap-4 text-black text-lg font-medium rounded-lg bg-yellow-600 hover:bg-yellow-800 transition-colors duration-200";

  const stateClasses = {
    loading: "cursor-wait bg-yellow-500",
    disabled: "bg-yellow-100 text-gray-500 cursor-not-allowed hover:bg-yellow-100",
    default: "bg-yellow-600 hover:bg-yellow-800",
  };

  const getButtonContent = () => {
    if (state === "loading") {
      return (
        <div className="flex items-center justify-center gap-2">
          <span>Loading</span>
          <img src={loadingIcon} className="w-6 animate-spin" alt="Loading" />
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center gap-2">
        <span>{children}</span>
        <img src={chevronRight} className="w-6" alt="Proceed" />
      </div>
    );
  };

  return (
    <button
      onClick={onClick}
      {...buttonProps}
      disabled={state === "loading" || state === "disabled"}
      className={`${baseClasses} ${stateClasses[state]}`}>
      {getButtonContent()}
    </button>
  );
};

export default Button;

import React from "react";
import loadingIcon from "../assets/images/hour-glass.png";
import loadingIconYellow from "../assets/images/hour-glass-yellow.png";
import chevronRight from "../assets/images/chevron-right.png";

const Button = ({ children, onClick, state = "default", theme = "primary", ...buttonProps }) => {
  const primaryTheme = theme === "primary";
  const baseClasses = `flex items-center justify-center px-6 py-3 gap-4 text-lg font-medium rounded-lg transition-colors duration-200`;

  const stateClasses = {
    loading: `cursor-wait ${primaryTheme ? "bg-yellow-500 hover:bg-yellow-500" : "bg-yellow-50 hover:bg-yellow-50"}`,
    disabled: `cursor-not-allowed bg-yellow-100 ${primaryTheme ? "text-gray-500 hover:bg-yellow-100" : "text-black-20 hover:bg-yellow-50 border-none"}`,
    default: primaryTheme
      ? "text-black bg-yellow-600 hover:bg-yellow-800"
      : "text-yellow-600 border border-[1.5px] border-yellow-600 bg-yellow-100 hover:bg-yellow-50",
  };

  const getButtonContent = () => {
    if (state === "loading") {
      return (
        <div className="flex items-center justify-center gap-2">
          <span>Loading</span>
          <img
            src={primaryTheme ? loadingIcon : loadingIconYellow}
            className="w-6 animate-spin bg-yellow-50"
            alt="Loading"
          />
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center gap-2">
        <span>{children}</span>
        {primaryTheme && <img src={chevronRight} className="w-6" alt="Proceed" />}
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

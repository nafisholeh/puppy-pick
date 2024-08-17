import React, { useState, useEffect } from "react";
import eyeIcon from "../assets/images/eye.png";

const InputField = ({
  type: assignedType = "text",
  label,
  validator,
  errorMessage: externalError,
  onErrorChange,
  ...inputProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [internalError, setInternalError] = useState(null);

  const maybeValidateValue = (input) => {
    if (!validator) return;

    const validationError = validator(input);
    setInternalError(validationError);
  };

  const onHandleFocus = () => {
    setInternalError(null);
    setIsFocused(true);
  };

  const onHandleBlur = () => {
    setIsFocused(false);
    maybeValidateValue(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    maybeValidateValue(e.target.value);
  };

  useEffect(() => {
    if (onErrorChange) {
      onErrorChange(internalError || externalError);
    }
  }, [internalError, externalError, onErrorChange]);

  const handleMouseDown = () => {
    setIsPasswordVisible(true);
  };

  const handleMouseUp = () => {
    setIsPasswordVisible(false);
  };

  const error = internalError || externalError;
  const type = assignedType === "password" ? (isPasswordVisible ? "text" : "password") : assignedType;

  return (
    <div className="relative w-full max-w-sm mb-6 mt-4">
      <label className={`absolute -top-3 left-4 bg-white text-black font-normal text-sm px-1`}>{label}</label>
      <div
        className={`flex items-center bg-white hover:border-yellow-400 border rounded-lg p-4
          ${error ? "border-error" : "border-true-gray-300"}
          ${isFocused ? "border-2 border-yellow-600 hover:border-yellow-600" : ""}`}>
        <input
          {...inputProps}
          type={type}
          className="w-full outline-none text-black-80 placeholder-black-20 text-md font-normal"
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          onChange={handleChange}
        />
        {assignedType === "password" && (
          <button
            type="button"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`ml-2 ${isPasswordVisible && "opacity-50"}`}>
            <img src={eyeIcon} alt="Toggle visibility" className="w-7" />
          </button>
        )}
      </div>
      {error && <p className="text-error text-sm mt-2 ml-2">{error}</p>}
    </div>
  );
};

export default InputField;

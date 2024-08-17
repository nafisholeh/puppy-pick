import React, { useState } from 'react';
import eyeIcon from '../assets/images/eye.png';

const InputField = ({ type = 'email', label, errorMessage, ...inputProps }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative w-full max-w-sm mb-6 mt-4">
      <label className={`absolute -top-3 left-4 bg-white text-black font-normal text-sm px-1`}>
        {label}
      </label>
      <div className={`flex items-center hover:border-yellow-400 ${errorMessage ? 'border-error' : 'border-true-gray-300'} border rounded-lg p-4`}>
        <input
          type={type}
          className="w-full outline-none text-black-80 placeholder-black-20 text-md font-normal"
          {...inputProps}
        />
        {type === 'password' &&
          <button type="button" onClick={togglePasswordVisibility} className="ml-2 focus:outline-none">
            <img src={eyeIcon} alt="Toggle visibility" className="w-7"/>
          </button>
        }
      </div>
      {errorMessage && <p className="text-error text-sm mt-2 ml-2">{errorMessage}</p>}
    </div>
  );
};

export default InputField;

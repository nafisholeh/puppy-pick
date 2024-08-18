import React, { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export const ProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    accountCreated: false,
    breedsSelected: false,
    pupsPicked: false,
  });

  const updateProgress = (step) => {
    setProgress((prev) => ({
      ...prev,
      [step]: true,
    }));
  };

  return <ProgressContext.Provider value={{ progress, updateProgress }}>{children}</ProgressContext.Provider>;
};

export const useProgress = () => {
  return useContext(ProgressContext);
};

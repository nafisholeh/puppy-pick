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

  const restartProgress = () => {
    setProgress({
      accountCreated: false,
      breedsSelected: false,
      pupsPicked: false,
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, restartProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  return useContext(ProgressContext);
};

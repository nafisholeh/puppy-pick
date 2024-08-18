import React, { useState } from "react";
import Card from "./Card";

const CardSelect = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <Card className="flex flex-row items-center justify-between cursor-pointer" onClick={toggleSwitch}>
      {children}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${isOn ? "bg-yellow-600" : "bg-gray-400"}`}>
        <div className={`w-4 h-4 rounded-full transition-colors duration-300 ${isOn ? "bg-yellow-200" : "bg-white"}`} />
      </div>
    </Card>
  );
};

export default CardSelect;

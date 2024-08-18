import React from "react";
import Card from "./Card";

const CardSelect = ({ children, isSelected, onSelect }) => {
  return (
    <Card
      onClick={onSelect}
      className={`cursor-pointer p-4 border rounded-lg transition-colors duration-300 ${
        isSelected ? "bg-yellow-200 border-yellow-600" : "bg-white"
      }`}>
      <div className="text-lg font-semibold">{children}</div>
    </Card>
  );
};

export default CardSelect;

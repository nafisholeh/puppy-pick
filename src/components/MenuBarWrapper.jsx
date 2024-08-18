import React from "react";
import { useNavigate } from "react-router-dom";

const MenuBarWrapper = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Menu Bar */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dog Breeds</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200">
          Logout
        </button>
      </div>
      {/* Main Content Area */}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default MenuBarWrapper;

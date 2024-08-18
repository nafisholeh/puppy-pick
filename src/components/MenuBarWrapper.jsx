import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import { useUserAuth } from "../contexts/authContext";

const MenuBarWrapper = ({ children }) => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Menu Bar */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dog Breeds</h1>
        <Button theme="secondary" onClick={handleLogout} state={loading ? "loading" : "default"}>
          Logout
        </Button>
      </div>
      {/* Main Content Area */}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default MenuBarWrapper;

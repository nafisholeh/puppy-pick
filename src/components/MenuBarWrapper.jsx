import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import StepIndicator from "../shared/StepIndicator";
import { useUserAuth } from "../contexts/authContext";
import { useProgress } from "../contexts/ProgressContext";

const MenuBarWrapper = ({ children }) => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { progress } = useProgress();

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
    <div className="min-h-screen flex">
      <div className="w-1/4 bg-white shadow p-6 flex flex-col justify-between sticky top-0 h-screen">
        <h1 className="text-2xl font-bold">Puppy Pick</h1>
        <div>
          <StepIndicator
            state={progress.accountCreated || progress.breedsSelected ? "completed" : "inactive"}
            title="Create Your Account"
            description="Sign up to start your puppy journey."
          />
          <StepIndicator
            state={progress.breedsSelected ? "completed" : "active"}
            title="Choose Your Breeds"
            description="Select up to 3 dog breeds you love."
          />
          <StepIndicator
            state={progress.breedsSelected ? "active" : "inactive"}
            title="Pick Your Favorite Pups"
            description="Choose your favorite dogs from the selected breeds."
          />
        </div>
        <Button theme="secondary" onClick={handleLogout} state={loading ? "loading" : "default"} className="mt-8">
          Logout
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default MenuBarWrapper;

import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../shared/InputField";
import Button from "../shared/Button";
import { validateEmail, validatePassword } from "../utils/validator";
import Card from "../shared/Card";
import { useUserAuth } from "../contexts/authContext";
import { useProgress } from "../contexts/ProgressContext";

const Login = () => {
  const [errors, setErrors] = useState({ email: null, password: null });
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [signupActionEnabled, setSignupActionEnabled] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const { logIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const { updateProgress } = useProgress();

  const handleInputChange = (fieldName) => (value) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [fieldName]: value,
    }));
  };

  const handleErrorChange = (fieldName) => (error) => {
    setErrors((prevErrors) => {
      if (prevErrors[fieldName] !== error) {
        return { ...prevErrors, [fieldName]: error };
      }
      return prevErrors; // Return the same state if nothing has changed
    });
  };

  const switchToSignup = () => {
    setIsSignupMode(true);
  };

  const enterApp = () => {
    navigate("/breed");
    updateProgress("accountCreated");
  };

  const onHandleSignin = async (event) => {
    event.preventDefault();
    if (hasErrors) return;
    setLoading(true);
    try {
      await logIn(credentials.email, credentials.password);
      enterApp();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        handleErrorChange("password")("Incorrect password. Please try again.");
        setSignupActionEnabled(true);
      } else {
        handleErrorChange("email")("Error signing in: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const onHandleSignup = async (event) => {
    event.preventDefault();
    if (hasErrors) return;
    setLoading(true);
    try {
      await signUp(credentials.email, credentials.password);
      enterApp();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        handleErrorChange("email")("Email already in use. Please use a different email.");
      } else {
        handleErrorChange("email")("Error creating new user: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const hasErrors = useMemo(() => Object.values(errors).some((error) => error), [errors]);
  const buttonState = loading ? "loading" : hasErrors ? "disabled" : "default";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100">
      <div className="text-center mb-14">
        <h1 className="text-7xl text-true-gray-900 font-bold mb-5">Puppy Pick!</h1>
        <h3 className="text-md text-true-gray-400">Pick the Pup of Your Dreams</h3>
      </div>
      <Card className="w-full max-w-md p-8">
        <form onSubmit={isSignupMode ? onHandleSignup : onHandleSignin}>
          <InputField
            label="Email"
            placeholder="Enter your email"
            onHandleChange={handleInputChange("email")}
            validator={validateEmail}
            onErrorChange={handleErrorChange("email")}
            errorMessage={errors.email}
          />
          <InputField
            label="Password"
            placeholder="6+ characters, case sensitive"
            type="password"
            onHandleChange={handleInputChange("password")}
            validator={validatePassword}
            onErrorChange={handleErrorChange("password")}
            errorMessage={errors.password}
          />
          <div className="flex justify-end">
            <Button type="submit" state={buttonState}>
              {isSignupMode ? "Create Account" : "Pick Your Pup!"}
            </Button>
          </div>
          {!isSignupMode && signupActionEnabled && (
            <div className="text-end mt-4">
              <p className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <button onClick={switchToSignup} className="text-yellow-700 hover:underline">
                  Sign Up
                </button>
              </p>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Login;

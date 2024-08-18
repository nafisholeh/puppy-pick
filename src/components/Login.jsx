import React, { useState, useMemo } from "react";
import InputField from "../shared/InputField";
import Button from "../shared/Button";
import { validateEmail, validatePassword } from "../utils/validator";
import Card from "../shared/Card";
import { useUserAuth } from "../contexts/authContext";

const Login = () => {
  const [errors, setErrors] = useState({ email: null, password: null });
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { logIn } = useUserAuth();

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (hasErrors) return;
    try {
      const userCredential = await logIn(credentials.email, credentials.password);
      console.log("User signed in:", userCredential.user);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        handleErrorChange("email")("");
      }
    }
  };

  const hasErrors = useMemo(() => Object.values(errors).some((error) => error), [errors]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100">
      <div className="text-center mb-14">
        <h1 className="text-7xl text-true-gray-900 font-bold mb-5">Puppy Pick!</h1>
        <h3 className="text-md text-true-gray-400">Pick the Pup of Your Dreams</h3>
      </div>
      <Card className="w-full max-w-md p-8">
        <form onSubmit={handleSubmit}>
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
            <Button type="submit" disabled={hasErrors}>
              Pick Your Pup!
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;

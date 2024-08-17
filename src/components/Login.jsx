import InputField from "../shared/InputField";
import Button from "../shared/Button";
import { validateEmail, validatePassword } from "../utils/validator";
import Card from "../shared/Card";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., call an API
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100">
      <div className="text-center mb-14">
        <h1 className="text-7xl text-true-gray-900 font-bold mb-5">Puppy Pick!</h1>
        <h3 className="text-md text-true-gray-400">Pick the Pup of Your Dreams</h3>
      </div>
      <Card className="w-full max-w-md p-8">
        <form onSubmit={handleSubmit}>
          <InputField label="Email" placeholder="Enter your email" validator={validateEmail} />
          <InputField
            label="Password"
            placeholder="6+ characters, case sensitive"
            type="password"
            validator={validatePassword}
          />
          <div className="flex justify-end">
            <Button type="submit">Pick Your Pup!</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;

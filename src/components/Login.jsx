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
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
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

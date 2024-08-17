import InputField from "../shared/InputField";
import { validateEmail, validatePassword } from "../utils/validator";

const Login = () => {
  return (
    <div>
      <InputField label="Email" placeholder="Enter your email" validator={validateEmail} />
      <InputField
        label="Password"
        placeholder="6+ characters, case sensitive"
        type="password"
        validator={validatePassword}
      />
    </div>
  );
};

export default Login;

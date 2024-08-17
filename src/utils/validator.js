const validateEmail = (value) => {
  if (!value) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return "Please enter a valid email address";
  }
  return null;
};

const validatePassword = (value) => {
  if (!value) {
    return "Password is required";
  }
  if (value.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return null;
};

export { validateEmail, validatePassword };

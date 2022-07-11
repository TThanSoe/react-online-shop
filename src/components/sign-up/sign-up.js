import { useState } from "react";
import FormInput from "../form-input/form-component";
import Button from "../button/button";

import { SignUpContainer } from "./sign-up.styles";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFileds, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFileds;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFileds, [name]: value });
  };

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          reruired
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;

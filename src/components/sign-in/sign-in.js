import { useState } from "react";
import FormInput from "../form-input/form-component";
import { SignInContainer, ButtonsContainer } from "./sign-in.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <SignInContainer>
        <h2>Existing Customers</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
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
          <ButtonsContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
              Login
            </Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type="button"
              //   onClick={signInWithGoogle}
            >
              Login With Google
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    </div>
  );
};

export default SignIn;

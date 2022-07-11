import { RegisterContainer, ButtonLink } from "./register.styles";

const Register = () => {
  return (
    <RegisterContainer>
      <h2>New Customers</h2>
      <span>Register with Best Clothes Today</span>
      <ButtonLink to="/sign-up">Register Now </ButtonLink>
    </RegisterContainer>
  );
};

export default Register;

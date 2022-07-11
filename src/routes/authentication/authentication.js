import SignIn from "../../components/sign-in/sign-in";
import Register from "../../components/register/register";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <Register />
    </AuthenticationContainer>
  );
};

export default Authentication;

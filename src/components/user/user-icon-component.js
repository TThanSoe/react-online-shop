import UserIcon from "../../assets/user.svg";
import { UserContainer } from "./user-icon.styles";

const User = () => {
  return (
    <UserContainer>
      <img src={UserIcon} alt="user" />
    </UserContainer>
  );
};
export default User;

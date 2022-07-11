import UserSvg from "../../assets/user.svg";
import { UserContainer } from "./user-icon.styles";

const UserIcon = () => {
  return (
    <UserContainer>
      <img src={UserSvg} alt="user" />
    </UserContainer>
  );
};
export default UserIcon;

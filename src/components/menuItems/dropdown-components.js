import { DropDwonContainer, DropDownLink } from "./menuItem.styles";

const DropDown = ({ submenus }) => {
  return (
    <DropDwonContainer>
      {submenus.map((submenu, index) => (
        <DropDownLink to="/" key={index}>
          {submenu.label}
        </DropDownLink>
      ))}
    </DropDwonContainer>
  );
};

export default DropDown;

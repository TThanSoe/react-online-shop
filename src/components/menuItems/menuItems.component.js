import { useState } from "react";
import DropDown from "./dropdown-components";
import { MenuItemLink, MenuItemsContainer } from "./menuItem.styles";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <MenuItemsContainer>
      {items.submenu ? (
        <div>
          <MenuItemLink
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.label}
          </MenuItemLink>
          <DropDown submenus={items.submenu} />
        </div>
      ) : (
        <MenuItemLink>{items.label}</MenuItemLink>
      )}
    </MenuItemsContainer>
  );
};

export default MenuItems;

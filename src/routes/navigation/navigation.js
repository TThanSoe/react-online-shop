import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import BestLogo from "../../assets/logo.svg";
import { menuItems } from "../../components/menuItems/menuItems";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import UserIcon from "../../components/user-icon/user-icon-component";
import { ReactComponent as BurgerMenu } from "../../assets/hamburger-menu.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import {
  NavigationContainer,
  NavLink,
  LogoContainer,
  HamburgerIcon,
  CloseIcon,
  MobileMenu,
  DesktopMenu,
  LogoIcon,
} from "./navigation.styles";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <NavigationContainer>
        {!isMenuOpen ? (
          <HamburgerIcon onClick={handleOpen}>
            <BurgerMenu />
          </HamburgerIcon>
        ) : null}
        {isMenuOpen ? (
          <CloseIcon onClick={handleOpen}>
            <Close />
          </CloseIcon>
        ) : null}
        <MobileMenu open={isMenuOpen}>
          <LogoContainer to="/">
            <LogoIcon />
          </LogoContainer>
          {menuItems.map((menu, index) => (
            <NavLink to={menu.route} key={index}>
              {menu.label}
            </NavLink>
          ))}
          <NavLink to="/user">
            <UserIcon />
          </NavLink>
          <NavLink to="/cart">
            <CartIcon />
          </NavLink>
        </MobileMenu>
        <DesktopMenu>
          <LogoContainer to="/">
            <img src={BestLogo} alt="logo" />
          </LogoContainer>
          {menuItems.map((menu, index) => (
            <NavLink to={menu.route} key={index}>
              {menu.label}
            </NavLink>
          ))}
          <NavLink to="/user">
            <UserIcon />
          </NavLink>
          <NavLink to="/cart">
            <CartIcon />
          </NavLink>
        </DesktopMenu>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

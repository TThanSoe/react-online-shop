import { Fragment } from "react";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">Logo</LogoContainer>
        <NavLinks>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/kids">Kids</NavLink>
          <NavLink to="sign-in">Sign in</NavLink>
          <NavLink to="sign-up">Sign up</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

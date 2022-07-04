import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const NavigationContainer = styled.div`
  height: 100px;
  width: 100%;
`;
export const LogoContainer = styled(Link)``;

// export const NavLinks = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HamburgerIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  font-size: 1.1rem;
  z-index: 1;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  left: 70%;
  margin: 1rem;
  font-size: 1.1rem;
  z-index: 1;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  display: flex;
  background-color: #f7f3e9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: column;
  padding: 4rem 0.5rem;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(-100%);")};
  transition: transform 150ms ease-in;
  a {
    color: #121211;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
export const DesktopMenu = styled.nav`
  display: flex;
  background-color: #f7f3e9;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;
  max-width: 100%;
  height: 25%;
  gap: 2rem;
  font-size: 1.3rem;
  a:first-child {
    margin-right: auto;
    &:hover {
      text-decoration: none;
    }
  }
  a {
    text-decoration: none;
    color: #121211;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
export const LogoIcon = styled(Logo)`
  width: 100px;
  height: 50px;
`;

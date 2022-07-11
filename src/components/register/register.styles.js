import { Link } from "react-router-dom";
import styled from "styled-components";

const bgColorBlack = "#292828";
const colorWhite = "#FDFCFA";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin: auto;

  h2 {
    margin: 20px 0;
  }
  span {
    margin: 20px 0;
  }

  @media (min-width: 600px) {
    width: 450px;
    font-size: 20px;
    margin: 0;
  }
`;

export const ButtonLink = styled(Link)`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 16px;
  margin: 20px 0;
  background-color: ${bgColorBlack};
  color: ${colorWhite};
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${colorWhite};
    color: ${bgColorBlack};
    border: 1px solid ${bgColorBlack};
  }

  @media (min-width: 600px) {
    font-size: 18px;
    width: 180px;
  }
`;

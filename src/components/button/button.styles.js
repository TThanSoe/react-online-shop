import styled from "styled-components";

const bgColorBlack = "#292828";
const colorWhite = "#FDFCFA";

export const BaseButton = styled.button`
  min-width: 257px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 16px;
  background-color: ${bgColorBlack};
  color: ${colorWhite};
  text-transform: uppercase;
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
    margin: 0;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #576ddf;
  color: ${colorWhite};
  //   min-width: 257px;
  margin-top: 20px;

  &:hover {
    background-color: ${bgColorBlack};
    color: ${colorWhite};
    border: none;
    margin-top: 0;
  }

  @media (min-width: 600px) {
    margin: 0;
    min-width: 280px;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${colorWhite};
  color: ${bgColorBlack};
  border: 1px solid ${bgColorBlack};

  &:hover {
    background-color: ${bgColorBlack};
    color: ${colorWhite};
    border: none;
  }

  @media (min-width: 600px) {
    margin: 0;
    min-width: 165px;
  }
`;

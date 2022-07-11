import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin: auto;
  margin: 0 20px;

  h2 {
    margin: 20px 0;
  }
  span {
    margin: 20px 0;
  }

  @media (min-width: 600px) {
    width: 450px;
    font-size: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media (min-width: 600px) {
    gap: 1rem;
    flex-direction: row;
    margin: 0;
  }
`;

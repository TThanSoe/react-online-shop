import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  //   width: 100%;
  justify-content: space-between;
  margin: auto;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    margin: 30px auto;
    width: 1100px;
  }
`;

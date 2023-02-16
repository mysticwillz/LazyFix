import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";

interface toggleProps {
  toggleTheme: boolean;
}
function Button({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <FirstButton></FirstButton>
      <FirstButton></FirstButton>
      <FirstButton></FirstButton>
      <FirstButton></FirstButton>
    </Container>
  );
}

export default Button;
const Container = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  top: 70px;
  border: 4px solid red;
  background-color: ${(props) => props.color};
  @media (min-width: 768px) {
    width: 80%;
  }
`;

const FirstButton = styled.div`
  width: 600px;
  height: 500px;
  border: 4px solid red;
  margin: 20px auto;
`;

import React from "react";
import styled from "styled-components";
import { Container } from "../../Reusables/Styles";
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

const ComponentWrapper = styled.div`
  background-color: white;
  width: 90%;
  height: 250px;

  border: 1px solid #023047;
  border-radius: 20px;
  margin: 20px auto;

  @media (min-width: 768px) {
    height: 450px;
  }
`;
const FirstButton = styled.div`
  background-color: white;
  width: 90%;
  height: 250px;

  border: 1px solid #023047;
  border-radius: 20px;
  margin: 20px auto;

  @media (min-width: 768px) {
    height: 450px;
  }
`;

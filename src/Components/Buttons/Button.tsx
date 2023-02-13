import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme";

interface toggleProps {
  toggleTheme: boolean;
}
function Button({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      Button
    </Container>
  );
}

export default Button;
const Container = styled.div`
  width: 80%;
  height: 100vh;
  background-color: ${(props) => props.color};
`;

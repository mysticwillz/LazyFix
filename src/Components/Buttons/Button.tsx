import styled from "styled-components";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";
import Slide from "./Slide/Slide";

interface toggleProps {
  toggleTheme: boolean;
}
function Button({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Button Components
      </Heading>
      <ComponentWrapper
        color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
      >
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          singing button{" "}
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          slide button{" "}
        </Title>
        <h5>View React source code</h5>
        <Components>
          <Slide />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          vibrating button{" "}
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          happy button{" "}
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
    </Container>
  );
}

export default Button;

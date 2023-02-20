import styled from "styled-components";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";
import Glow from "./Glow/Glow";
import MoveLeft from "./MoveLeft/MoveLeft";
import Shutter from "./Shutter/Shutter";
import Slide from "./Slide/Slide";
import WindowClose from "./WindowClose/WindowClose";

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
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          slide button effect{" "}
        </Title>
        <h5>View React source code</h5>
        <Components>
          <Slide />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper
        color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
      >
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Move Left Effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <MoveLeft />
        </Components>
      </ComponentWrapper>

      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Glow button effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <Glow />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Shutter button effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <Shutter />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Window Close button effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <WindowClose />
        </Components>
      </ComponentWrapper>
    </Container>
  );
}

export default Button;

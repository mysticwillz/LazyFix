import styled from "styled-components";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";
import Loading from "./Loading/Loading";

interface toggleProps {
  toggleTheme: boolean;
}
function Spinner({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Spinner Components
      </Heading>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          Loading spinner effect{" "}
        </Title>
        <h5>View React source code</h5>
        <Components>
          <Loading />
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
        <Components></Components>
      </ComponentWrapper>

      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Glow button effect
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Shutter button effect
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Window Close button effect
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          shine button effect
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Border button effect
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Double button effect
        </Title>
        <h5>View React source code</h5>
        <Components></Components>
      </ComponentWrapper>
    </Container>
  );
}

export default Spinner;

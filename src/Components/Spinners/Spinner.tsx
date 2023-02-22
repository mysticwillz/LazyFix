import styled from "styled-components";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";
import BlockSpin from "./BlockSpin/BlockSpin";
import Bouncy from "./Bouncy/Bouncy";
import CircleLoad from "./CircleLoad/CircleLoad";
import Loading from "./Loading/Loading";
import LoadText from "./LoadText/LoadText";
import Matrix from "./Matrix/Matrix";
import StringSpin from "./StringSpin/StringSpin";
import ThickShade from "./ThickShade/ThickShade";
import Whoop from "./Whoop/Whoop";

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
          Loading spinner effect
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
          Block Spin Spinner Effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <BlockSpin />
        </Components>
      </ComponentWrapper>

      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Whoop Spinner effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <Whoop />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          Circle load spinner effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <CircleLoad />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          load text spinner effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <LoadText />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          string spin spinner effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <StringSpin />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          Thick shade spinner effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <ThickShade />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          matrix spinner effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <Matrix />
        </Components>
      </ComponentWrapper>
      <ComponentWrapper>
        <Title color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          {" "}
          bouncy spinner effect
        </Title>
        <h5>View React source code</h5>
        <Components>
          <Bouncy />
        </Components>
      </ComponentWrapper>
    </Container>
  );
}

export default Spinner;

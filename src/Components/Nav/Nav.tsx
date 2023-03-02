import styled from "styled-components";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";

import { NavData } from "./NavData";

interface toggleProps {
  toggleTheme: boolean;
}
function Nav({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Form Components
      </Heading>
      <>
        {NavData.length > 0 &&
          NavData?.map((navs) => {
            const { title, nav } = navs;

            return (
              <ComponentWrapper
                key={title}
                color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
              >
                <Title
                  color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
                >
                  {title}
                </Title>
                <h5>View React source code</h5>
                <Components>{nav}</Components>
              </ComponentWrapper>
            );
          })}
      </>
    </Container>
  );
}

export default Nav;

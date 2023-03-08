import styled from "styled-components";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";

import { SpinnerData } from "./SpinnerData";

interface toggleProps {
  toggleTheme: boolean;
}
function Spinner({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        Spinner Components
      </Heading>
      <>
        {SpinnerData.length > 0 &&
          SpinnerData?.map((spinners) => {
            const { title, spinner } = spinners;

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
                <h5>View HTML & CSS source code</h5>
                <Components>{spinner}</Components>
              </ComponentWrapper>
            );
          })}
      </>
    </Container>
  );
}

export default Spinner;

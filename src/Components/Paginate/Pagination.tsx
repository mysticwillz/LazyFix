import styled from "styled-components";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";

import { PaginateData } from "./PaginateData";

interface toggleProps {
  toggleTheme: boolean;
}
function Pagination({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Pagination Components
      </Heading>
      <>
        {PaginateData.length > 0 &&
          PaginateData?.map((forms) => {
            const { title, card } = forms;

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
                <Components>{card}</Components>
              </ComponentWrapper>
            );
          })}
      </>
    </Container>
  );
}

export default Pagination;

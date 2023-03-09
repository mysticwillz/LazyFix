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
          PaginateData?.map((paginates) => {
            const { title, pagination } = paginates;

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
                <Components>{pagination}</Components>
              </ComponentWrapper>
            );
          })}
      </>
    </Container>
  );
}

export default Pagination;

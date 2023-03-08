import styled from "styled-components";
import { Container, Heading } from "../../Reusables/Styles";
import { theme } from "../../Theme";

interface toggleProps {
  toggleTheme: boolean;
}
function GettingStarted({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Getting Started
      </Heading>
      <SubContainer>
        <SubHeading> Introduction</SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          <span>
            {" "}
            LazyFix is a web application designed for frontend developers who
            are looking for ready-made UI components to use in their projects.{" "}
          </span>{" "}
          The application provides a collection of Web-based components.
        </Article>
        <Article
          className="para"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          Developers can easily copy the code snippets for these components and
          integrate them into their own projects. The LazyFix web application
          has been built using React and TypeScript, which ensures high
          performance and maintainability. It features a user-friendly interface
          that makes it easy for developers to browse and search for components.
        </Article>
        <SubHeading> How to use </SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          The functionality of copying the code snippets is built into the
          Lazyfix web app. This means that users can easily access the pre-built
          Web components, view their code snippets, and copy them directly from
          the web app without needing to clone the GitHub repository.
        </Article>
        <Article
          className="photo-heading"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          1. Click on copy Html and Css code
        </Article>
        <ImageContainer>
          <img src="" alt="first image description" />
        </ImageContainer>
      </SubContainer>
    </Container>
  );
}

export default GettingStarted;

const SubContainer = styled.h5`
  width: 80%;
  margin-left: 50px;
  .para {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;
const SubHeading = styled.h5`
  font-size: 28px;
  line-height: 54px;

  color: #4361ee;
  font-family: "Roboto", sans-serif;
`;

const Article = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: ${(props) => props.color};
  font-weight: 400;

  span {
    font-weight: 600;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

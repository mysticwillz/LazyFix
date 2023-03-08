import styled from "styled-components";
import { Container, Heading } from "../../Reusables/Styles";
import { theme } from "../../Theme";
import clicktocopy from "../../Assets/clicktocopy.png";
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
          <span>
            The functionality of copying the code snippets is built into the
            Lazyfix web app.
          </span>{" "}
          This means that users can easily access the pre-built Web components,
          view their code snippets, and copy them directly from the web app
          without needing to clone the GitHub repository.
        </Article>
        <Article
          className="photo-heading"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          1. Click on view Html and Css code
        </Article>
        <ImageContainer>
          <img src={clicktocopy} alt="first image description" />
        </ImageContainer>
        <Article
          className="photo-heading"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          2.Choose the template to copy
        </Article>
        <ImageContainer>
          <img src={clicktocopy} alt="first image description" />
        </ImageContainer>
        <Article
          className="photo-heading"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          2.Click copy to copy code snippet
        </Article>
        <ImageContainer>
          <img src={clicktocopy} alt="first image description" />
        </ImageContainer>
      </SubContainer>
    </Container>
  );
}

export default GettingStarted;

const SubContainer = styled.main`
  width: 80%;
  margin-left: 50px;
  .para {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .photo-heading {
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 22px;
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
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

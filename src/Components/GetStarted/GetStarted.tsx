import styled from "styled-components";
import { Container, Heading } from "../../Reusables/Styles";
import { theme } from "../../Theme";
import clicktocopy from "../../Assets/clicktocopy.png";
import howto2 from "../../Assets/howto2.png";
import howto3 from "../../Assets/howto3.png";
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
          2. Choose the template to copy
        </Article>
        <ImageContainer>
          <img src={howto2} alt="first image description" />
        </ImageContainer>
        <Article
          className="photo-heading"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          3. Click copy to copy code snippet
        </Article>
        <ImageContainer>
          <img src={howto3} alt="first image description" />
        </ImageContainer>
        <SubHeading className="conclusion-heading"> Conclusion</SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          To use this feature, users can simply navigate to the component they
          want to use, view the code snippet, and click on the{" "}
          <span>"Copy"</span> button next to it. The code will be automatically
          copied to their clipboard, and they can then paste it into their code
          editor or IDE.
        </Article>
        <Article
          className="article-para"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          It's important to note that the "Copy" button relies on the Clipboard
          API, which is supported in modern browsers such as Google Chrome,
          Mozilla Firefox, Microsoft Edge, and Safari. If a user's browser does
          not support this API, they can still copy the code manually by
          selecting it and using the copy function in their browser or
          operating system.
        </Article>
        <Article
          className="article-para2"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          In conclusion, LazyFix is a useful web application for frontend
          developers looking for reusable UI components. Built using React,
          TypeScript, and Styled Components. The project is open source, so
          contributions are welcome. To get started with the project, simply
          clone the repository from GitHub and follow the instructions in
          the README file.
        </Article>
      </SubContainer>
    </Container>
  );
}

export default GettingStarted;

const SubContainer = styled.main`
  width: 100%;
  padding: 0 5px;
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
  .conclusion-heading {
    margin-top: 30px;
  }
  .article-para {
    margin-top: 15px;
  }
  .article-para2 {
    margin-top: 15px;
    margin-bottom: 30px;
  }
  @media (min-width: 768px) {
    width: 90%;
    padding: 0 0px;
    margin-left: 50px;
  }
`;
const SubHeading = styled.h5`
  font-size: 28px;
  line-height: 40px;

  color: #4361ee;
  font-family: "Roboto", sans-serif;
  @media (min-width: 768px) {
    line-height: 54px;
  }
`;

const Article = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.color};
  font-weight: 400;

  span {
    font-weight: 600;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;
const ImageContainer = styled.div`
  max-width: 100%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;

  img {
    width: 100%;
    height: 100%;
  }
`;

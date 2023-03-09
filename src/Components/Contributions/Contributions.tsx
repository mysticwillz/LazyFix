import styled from "styled-components";
import { Container, Heading } from "../../Reusables/Styles";
import { theme } from "../../Theme";
import clicktocopy from "../../Assets/clicktocopy.png";
import CopyCode from "../../Reusables/CopyCode";
interface toggleProps {
  toggleTheme: boolean;
}
function Contributions({ toggleTheme }: toggleProps) {
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Contribution Guidelines
      </Heading>
      <SubContainer
        color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
      >
        <SubHeading>Prerequisites</SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          Before contributing to the LazyFix project, you should have a basic
          understanding of the following technologies:
        </Article>
        <ul className="list">
          <li>Html</li>
          <li>Css</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Styled Components</li>
          <li>Git and Github</li>
        </ul>
        <SmallHeading
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          {" "}
          Step-by-Step Guide
        </SmallHeading>
        <SubHeading> 1. Fork the main repository</SubHeading>
        <Article
          className="shift"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          Before contributing to Lazyfix, you need to create a fork of the main
          repository. You can do this by clicking on the "Fork" button on the
          top right corner of the main repository page.
        </Article>
        <SubHeading> 2. Clone the repository</SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          Once you have created a fork of the main repository, you need to clone
          the forked repository to your local machine using the command:
        </Article>

        <CopyCode>
          git clone https://github.com/mysticwillz/lazyfix.git
        </CopyCode>
        <SubHeading> 3. Install dependencies</SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          After cloning the repository, navigate to the project directory and
          install the project dependencies using the command:
        </Article>

        <CopyCode>npm install</CopyCode>
        <SubHeading> 4. Create a new branch</SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          It is important to create a new branch for each new feature or bug fix
          to ensure that the changes made do not affect the main codebase. To
          create a new branch, use the command:
        </Article>

        <CopyCode>git checkout -b new-branch-name</CopyCode>
        <SubHeading> 5. Make changes and commit</SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          After creating a new branch, make the necessary changes to the
          codebase. Once you are done making changes, commit them using the
          command:
        </Article>

        <CopyCode>git add . & git commit -m "your commit message"</CopyCode>
        <Article
          className="shift"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          Ensure that your commit message is clear and concise, and describes
          the changes you have made.
        </Article>
        <SubHeading>6. Push changes to the forked repository </SubHeading>
        <Article color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
          Once you have committed your changes, push them to the forked
          repository using the command:
        </Article>

        <CopyCode>git push origin new-branch-name</CopyCode>
        <SubHeading> 7. Create a pull request</SubHeading>
        <Article
          className="shift"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          After pushing your changes, create a pull request to the main
          repository by clicking on the "New pull request" button on the main
          repository page. Make sure to describe the changes you have made and
          the reason for making them.
        </Article>
        <SubHeading> 8. Review and merge</SubHeading>
        <Article
          className="shift"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          Once your pull request has been submitted, it will be reviewed by the
          project maintainers. If your changes are accepted, they will be merged
          into the main codebase.
        </Article>

        <SmallHeading
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          Conclusion
        </SmallHeading>
        <Article
          className="para"
          color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
        >
          Contributing to Lazyfix is easy and straightforward. By following
          these steps, you can contribute to the project and help make it even
          better.
        </Article>
      </SubContainer>
    </Container>
  );
}

export default Contributions;

const SubContainer = styled.main`
  max-width: 100%;
  padding: 0 5px;
  overflow-x: hidden;
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
  .shift {
    margin-bottom: 30px;
  }
  .list {
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.color};
    font-weight: 400;
    list-style-type: none;
  }

  @media (min-width: 768px) {
    width: 85%;
    padding: 0 0px;
    margin-left: 50px;

    .list {
      font-size: 18px;
      line-height: 26px;
    }
  }
`;
const SubHeading = styled.h5`
  font-size: 22px;
  line-height: 36px;

  color: #4361ee;
  font-family: "Roboto", sans-serif;
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
const SmallHeading = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
  color: ${(props) => props.color};
`;

import styled from "styled-components";
import { theme } from "../../Theme";
import { AiFillGithub } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import HeroImage from "../../Assets/Hero.png";

interface Props {
  toggleTheme: boolean;
  setToggleTheme: (toggler: boolean) => void;
}
function NavSection({ toggleTheme, setToggleTheme }: Props) {
  return (
    <>
      <$OverallContainer>
        <$Container color={toggleTheme ? theme.home_bg : theme.home_text}>
          <$LogoContainer>
            <img src={HeroImage} alt="logo" />
          </$LogoContainer>
          <div className="nav_links">
            <ul>
              <li>Docs</li>
              <li>Components</li>
              <li>Blog</li>
            </ul>

            <button>Get Started</button>
            <div className="line"></div>
            <AiFillGithub className="icons" />
            {!toggleTheme ? (
              <div
                onClick={() => {
                  setToggleTheme(!toggleTheme);
                }}
                className="icons"
              >
                <MdLightMode className="icons" />
              </div>
            ) : (
              <div
                onClick={() => {
                  setToggleTheme(!toggleTheme);
                }}
                className="icons"
              >
                <MdDarkMode className="icons" />
              </div>
            )}
          </div>
        </$Container>
      </$OverallContainer>
    </>
  );
}

export default NavSection;
const $OverallContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Outfit", sans-serif;
`;

const $Container = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 50px;

  justify-content: space-between;
  border-bottom: 1px solid gray;
  overflow: hidden;
  width: 100%;
  max-width: 1440px;
  height: 70px;
  color: ${(props) => props.color};

  .nav_links {
    width: 600px;
    display: flex;
    align-items: center;
  }
  ul {
    width: 250px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #4361ee;
    }
  }
  button {
    color: ${theme.home_text};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    cursor: pointer;
    background-color: #4361ee;
    border-radius: 4px;
    border: none;
    margin-left: 50px;
    transition: all 0.3s ease-in-out;
    font-weight: medium;
    font-size: 16px;
    &:hover {
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #4361ee;
    }
  }
  .line {
    height: 50px;
    width: 1px;
    background-color: gray;
    margin: 0px 20px 0px 40px;
  }

  .icons {
    height: 30px;
    width: 30px;
    padding-right: 15px;
    cursor: pointer;
  }
`;
const $LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    margin: 0 10px;
  }
`;

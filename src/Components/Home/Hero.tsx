import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeroImage from "../../Assets/Hero.png";

import { theme } from "../../Theme";

import NavModal from "./NavModal";

interface Props {
  toggleTheme: boolean;

  showMenu: boolean;

  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Hero({ toggleTheme, showMenu, setShowMenu }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <$OverallContainer>
        <$HeroContainer>
          <$HeroText color={toggleTheme ? theme.home_bg : theme.home_text}>
            <h1>
              Unlock your full <span>potential,</span> <br />
              Utilize already built components.
            </h1>
            <p>
              Let us take care of the small web components, <br />
              so you can focus on optimizing and executing quality code.
            </p>{" "}
            <$HeroButton
              onClick={() => {
                navigate("/buttons");
              }}
            >
              Start Building Now
            </$HeroButton>
          </$HeroText>

          <$HeroImage>
            <img
              src={HeroImage}
              alt=" A hero image showing people using lazyfix technology"
            />
          </$HeroImage>
        </$HeroContainer>
        {showMenu && <NavModal toggleTheme={toggleTheme} />}
      </$OverallContainer>
    </>
  );
}

export default Hero;
const $OverallContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem auto 0;
  font-family: "Outfit", sans-serif;
`;

const $HeroContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 0 8px;
  @media (min-width: 768px) {
    padding: 0 50px;
  }
`;
const $HeroText = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};

  height: 100%;
  min-width: 70%;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: bold;

    font-family: "Roboto", sans-serif;
    @media (min-width: 768px) {
      font-size: 4rem;
      line-height: 4.9rem;
    }
  }
  span {
    color: #4361ee;
  }
  p {
    font-size: 18px;
    margin-top: 20px;
    font-family: "Montserrat", sans-serif;
  }
  .top {
    margin-top: 5px;
  }
  @media (min-width: 768px) {
    width: 55%;
    margin: 1rem auto 0;
  }
`;
const $HeroImage = styled.div`
  width: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const $HeroButton = styled.button`
  width: 15rem;
  background-color: #4361ee;
  color: ${theme.home_text};
  height: 52px;
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    width: 250px;
  }
`;

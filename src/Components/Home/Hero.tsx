import { useContext } from "react";
import styled from "styled-components";
import HeroImage from "../../Assets/Hero.png";
import { ModeContext } from "../../Context/ModeContext";
import { theme } from "../../Theme";
import Footer from "./Footer";

interface Props {
  toggleTheme: boolean;
}
function Hero({ toggleTheme }: Props) {
  return (
    <>
      <$OverallContainer>
        <$HeroContainer>
          <$HeroText color={toggleTheme ? theme.home_bg : theme.home_text}>
            <h1>
              Unlock your full potential, <br />
              Utilize already built <br /> <span>components.</span>
            </h1>
            <p>
              Let us take care of the small web components, so you can focus on
              optimizing and executing quality code.
            </p>{" "}
            <$HeroButton>Start Building Now</$HeroButton>
            <p> Built by the creator of: </p>
            <Footer />
          </$HeroText>
          <$HeroImage>
            <img
              src={HeroImage}
              alt=" A hero image showing people using lazyfix technology"
            />
          </$HeroImage>
        </$HeroContainer>
      </$OverallContainer>
    </>
  );
}

export default Hero;
const $OverallContainer = styled.main`
  width: 100%;
  display: flex;

  margin: 0 auto;

  font-family: "Outfit", sans-serif;
`;

const $HeroContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 100vh;
  padding: 0 8px;
  @media (min-width: 768px) {
    padding: 0 50px;
  }
`;
const $HeroText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};

  height: 100%;

  flex-direction: column;

  h1 {
    font-size: 52px;
    font-weight: bold;
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
  }
`;
const $HeroImage = styled.div`
  width: 600px;

  height: 600px;
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
  width: 240px;
  background-color: #4361ee;
  color: ${theme.home_text};
  height: 42px;
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  &:hover {
    width: 250px;
  }
`;

import styled from "styled-components";
import HeroImage from "../../Assets/Hero.png";
import { theme } from "../../Theme";

function Hero() {
  return (
    <>
      <$OverallContainer>
        <$HeroContainer>
          <$HeroText>
            <h1>
              Unlock your full potential, <br />
              Utilize already built <br /> <span>components.</span>
            </h1>
            <p> With our flexible styles and components,</p>{" "}
            <p className="top">you can save a lot</p>
            <$HeroButton>Start Building Now</$HeroButton>
            <p> Built by the creator of: </p>
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
  align-items: center;
  justify-content: center;

  font-family: "Outfit", sans-serif;
`;

const $HeroContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 0 50px;
`;
const $HeroText = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;

  height: 100%;
  color: ${theme.home_text};
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
    margin-top: 40px;
  }
  .top {
    margin-top: 5px;
  }
`;
const $HeroImage = styled.div`
  width: 600px;

  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
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

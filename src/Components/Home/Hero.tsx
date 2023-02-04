import styled from "styled-components";
import HeroImage from "../../Assets/Hero.png";

function Hero() {
  return (
    <>
      <$HeroContainer>
        <$HeroText></$HeroText>
        <$HeroImage>
          <img
            src={HeroImage}
            alt=" A hero image showing people using lazyfix technology"
          />
        </$HeroImage>
      </$HeroContainer>
    </>
  );
}

export default Hero;

const $HeroContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80vh;
`;
const $HeroText = styled.div`
  width: 45%;

  height: 100%;
`;
const $HeroImage = styled.div`
  width: 900px;

  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

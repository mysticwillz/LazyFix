import { useContext } from "react";
import styled from "styled-components";
import Footer from "../Components/Home/Footer";
import Hero from "../Components/Home/Hero";

import NavSection from "../Components/Home/NavSection";
import { ModeContext } from "../Context/ModeContext";
import { theme } from "../Theme";

function Home() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <Container>
      <NavSection />
      <Hero />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  background-color: ${theme.app_bg_light};
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
`;

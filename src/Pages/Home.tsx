import { useContext } from "react";
import styled from "styled-components";

import Hero from "../Components/Home/Hero";

import NavSection from "../Components/Home/NavSection";
import { ModeContext } from "../Context/ModeContext";
import { theme } from "../Theme";

function Home() {
  const { toggleTheme, setToggleTheme } = useContext(ModeContext);
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <NavSection toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
      <Hero toggleTheme={toggleTheme} />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  background-color: ${(props) => props.color};
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
`;

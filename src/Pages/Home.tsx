import { useContext, useState } from "react";
import styled from "styled-components";

import Hero from "../Components/Home/Hero";

import NavSection from "../Components/Home/NavSection";
import { ModeContext } from "../Context/ModeContext";

import { theme } from "../Theme";

function Home() {
  const { toggleTheme, setToggleTheme } = useContext(ModeContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <NavSection
        toggleTheme={toggleTheme}
        setToggleTheme={setToggleTheme}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Hero
        toggleTheme={toggleTheme}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  background-color: ${(props) => props.color};
  width: 100%;

  min-height: 100vh;

  overflow-x: hidden;
`;

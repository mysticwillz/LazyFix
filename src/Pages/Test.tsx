import { useContext } from "react";
import styled from "styled-components";
import NavSection from "../Components/Home/NavSection";
import { ModeContext } from "../Context/ModeContext";
import Sidebar from "../Layouts/Sidebar";
import { theme } from "../Theme";

function Test() {
  const { toggleTheme, setToggleTheme } = useContext(ModeContext);
  return (
    <>
      <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
        <NavSection toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
        <Sidebar />
      </Container>
    </>
  );
}

export default Test;
const Container = styled.main`
  background-color: ${(props) => props.color};
  width: 100%;
  max-width: 1440px;
  height: auto;
  font-family: "Outfit", sans-serif;
`;

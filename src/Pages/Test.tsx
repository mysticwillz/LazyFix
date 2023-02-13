import { useContext } from "react";
import styled from "styled-components";
import Button from "../Components/Buttons/Button";
import NavSection from "../Components/Home/NavSection";
import { ModeContext } from "../Context/ModeContext";
import Sidebar from "../Layouts/Sidebar";
import { theme } from "../Theme";

function Test() {
  const { toggleTheme, setToggleTheme } = useContext(ModeContext);
  return (
    <>
      <MainContainer color={toggleTheme ? theme.home_text : theme.home_bg}>
        <NavSection toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
        <Container>
          <Sidebar toggleTheme={toggleTheme} />

          <Button toggleTheme={toggleTheme} />
        </Container>
      </MainContainer>
    </>
  );
}

export default Test;
const MainContainer = styled.main`
  background-color: ${(props) => props.color};
  width: 100%;
  max-width: 1440px;
  height: auto;
  font-family: "Outfit", sans-serif;
`;
const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

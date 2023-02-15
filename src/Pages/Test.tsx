import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../Components/Buttons/Button";
import NavSection from "../Components/Home/NavSection";
import { ModeContext } from "../Context/ModeContext";
import Sidebar from "../Layouts/Sidebar";
import SidebarMobile from "../Layouts/SidebarMobile";
import { theme } from "../Theme";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
function Test() {
  const { toggleTheme, setToggleTheme } = useContext(ModeContext);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <MainContainer color={toggleTheme ? theme.home_text : theme.home_bg}>
        <NavSection toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />

        <Container color={toggleTheme ? theme.home_bg : theme.home_text}>
          <SidebarMobile toggleTheme={toggleTheme} showSidebar={showSidebar} />
          <Sidebar toggleTheme={toggleTheme} />
          {!showSidebar ? (
            <HiMenu
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
              className="show--bar"
            />
          ) : (
            <HiMenuAlt3
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
              className="show--bar"
            />
          )}
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
  position: relative;
`;
const Container = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;

  .show--bar {
    position: absolute;
    right: 0px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    z-index: 3;
    color: ${(props) => props.color};
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

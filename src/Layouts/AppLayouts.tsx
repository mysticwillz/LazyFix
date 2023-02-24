import { useContext, useState } from "react";
import styled from "styled-components";

import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import NavSection from "../Components/Home/NavSection";
import SidebarMobile from "../Components/Layouts/SidebarMobile";
import Sidebar from "../Components/Layouts/Sidebar";
import Button from "../Components/Buttons/Button";
import { ModeContext } from "../Context/ModeContext";
import { theme } from "../Theme";
interface children {
  children: React.ReactNode;
}
function AppLayouts({ children }: children) {
  const { toggleTheme, setToggleTheme } = useContext(ModeContext);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <>
      <MainContainer color={toggleTheme ? theme.home_text : theme.home_bg}>
        <NavSection toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />

        <Container color={toggleTheme ? theme.home_bg : theme.home_text}>
          <SidebarMobile toggleTheme={toggleTheme} showSidebar={showSidebar} />
          <Sidebar toggleTheme={toggleTheme} />
          {children}
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
        </Container>
      </MainContainer>
    </>
  );
}

export default AppLayouts;
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
    position: fixed;
    right: 20px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    z-index: 80;

    color: ${theme.home_bg};
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Theme";

interface toggleProps {
  toggleTheme: boolean;
  showSidebar: boolean;
}
interface sideProps {
  bars: string;
  link: string;
}
function SidebarMobile({ toggleTheme, showSidebar }: toggleProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const documentation: sideProps[] = [
    { bars: " Get started", link: "/get-started" },
    { bars: "How to use", link: "/how-to-use" },
  ];
  const sideNav: sideProps[] = [
    { bars: " Buttons", link: "/buttons" },
    { bars: "Spinners", link: "/spinners" },
    { bars: "Forms", link: "/forms" },
    { bars: "Cards", link: "/cards" },
    { bars: "Navigations", link: "/navigations" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <ContainerWrapper
        color={!showSidebar ? " translateX(-100%)" : "translateX(0%)"}
      >
        <Wrapper color={toggleTheme ? theme.home_text : theme.home_bg}>
          <Container>
            <input
              type="text"
              value={searchInput}
              name="searchInput"
              placeholder="search for components"
            />
            <h2>Documentation</h2>
            <GetStarted
              color={
                toggleTheme ? theme.app_text_light_big : theme.app_text_dark_big
              }
            >
              {documentation.map((nav) => {
                const { bars, link } = nav;

                return (
                  <List
                    onClick={() => {
                      navigate(link);
                    }}
                    className={
                      link === location.pathname ? "active--location" : ""
                    }
                  >
                    {bars}
                  </List>
                );
              })}
            </GetStarted>
            <h2>Components</h2>
            <Components
              color={
                toggleTheme ? theme.app_text_light_big : theme.app_text_dark_big
              }
            >
              {sideNav.map((nav) => {
                const { bars, link } = nav;

                return (
                  <List
                    onClick={() => {
                      navigate(link);
                    }}
                    className={
                      link === location.pathname ? "active--location" : ""
                    }
                  >
                    {bars}
                  </List>
                );
              })}
            </Components>
          </Container>
          <h2>Sponsors</h2>
          <SponsorsContainer>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </SponsorsContainer>
        </Wrapper>
      </ContainerWrapper>
    </>
  );
}

export default SidebarMobile;
const ContainerWrapper = styled.section`
  width: 70%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 71px;
  overflow-y: auto;

  z-index: 1002;
  transform: ${(props) => props.color};
  flex-direction: column;

  transition: all 0.3s ease-in;
  @media (min-width: 768px) {
    display: none;
  }
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: #4361ee;
    margin: 10px 0;
    padding-left: 10px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

const Container = styled.div`
  width: 80%;

  display: flex;

  flex-direction: column;

  input {
    width: 100%;
    height: 40px;
    outline: none;
    background-color: #2d9ef54f;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 18px;
    line-height: 24px;
    font-weight: medium;
    padding: 0 10px;
    margin: 20px 10px 15px;

    &:focus {
      background-color: white;
    }
  }
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: #4361ee;
    padding-left: 10px;
  }
`;
const GetStarted = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  padding-left: 10px;

  li {
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    cursor: pointer;
    list-style-type: none;
    padding: 7px 20px;
    border: 1.5px solid gray;
    border-radius: 0 10px 10px 0;
    text-align: center;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    &:hover {
      border: 1.5px solid #4361ee;
    }
  }
`;

const Components = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
  padding-left: 10px;
`;

const List = styled.li`
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  cursor: pointer;
  list-style-type: none;
  padding: 7px 20px;
  border: 1.5px solid gray;
  border-radius: 0 10px 10px 0;
  margin-bottom: 10px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border: 1.5px solid #4361ee;
  }
`;

const SponsorsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 42px;
    background-color: antiquewhite;
    border: 1px solid gray;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Theme";
interface toggleProps {
  toggleTheme: boolean;
}
interface sideProps {
  bars: string;
  link: string;
}
function Sidebar({ toggleTheme }: toggleProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const documentation: sideProps[] = [
    { bars: " Get started", link: "/get-started" },
    { bars: "Contributions", link: "/contributions" },
  ];
  const sideNav: sideProps[] = [
    { bars: " Buttons", link: "/buttons" },
    { bars: "Spinners", link: "/spinners" },
    { bars: "Forms", link: "/forms" },
    { bars: "Cards", link: "/cards" },
    { bars: "Navigations", link: "/navigations" },
    { bars: "Paginations", link: "/paginations" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <ContainerWrapper color={toggleTheme ? theme.home_text : theme.home_bg}>
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
      </ContainerWrapper>
    </>
  );
}

export default Sidebar;

const ContainerWrapper = styled.section`
  width: 19%;
  height: 100%;
  background-color: ${(props) => props.color};
  flex-direction: column;
  padding-left: 10px;
  display: none;
  position: fixed;
  left: 0;
  top: 70px;
  border-right: 1px solid gray;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (min-width: 768px) {
    display: flex;
  }
  .active--location {
    background-color: #4361ee;
    color: white;
    border: 1.5px solid #4361ee;
  }
  border-right: 1px solid gray;
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: #4361ee;
    margin: 10px 0;
  }
  ::-webkit-scrollbar {
    width: 2px;
  }
  Track &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 20px 0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Container = styled.div`
  width: 80%;

  display: flex;

  flex-direction: column;

  input {
    width: 95%;
    height: 40px;
    outline: none;
    background-color: #2d9ef54f;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 18px;
    line-height: 24px;
    font-weight: medium;
    padding: 0 10px;
    margin: 40px auto 30px;

    &:focus {
      background-color: white;
    }
  }
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: #4361ee;
  }
`;

const GetStarted = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};

  li {
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    cursor: pointer;
    list-style-type: none;
    padding: 7px 0px;
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
`;

const List = styled.li`
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  cursor: pointer;
  list-style-type: none;
  padding: 7px 0px;
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

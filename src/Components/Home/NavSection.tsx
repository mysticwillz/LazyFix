import { useState } from "react";
import styled from "styled-components";

import { theme } from "../../Theme";
import { AiFillGithub } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

interface Props {
  toggleTheme: boolean;
  showMenu: boolean;
  setToggleTheme: (toggler: boolean) => void;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
function NavSection({
  toggleTheme,
  setToggleTheme,
  setShowMenu,
  showMenu,
}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <$OverallContainer color={toggleTheme ? theme.home_text : theme.home_bg}>
        <$Container color={toggleTheme ? theme.home_bg : theme.home_text}>
          <$LogoContainer color={toggleTheme ? theme.home_bg : theme.home_text}>
            Lazy<span>Fix</span>
          </$LogoContainer>
          <div className="nav_links">
            <ul>
              <li>Docs</li>
              <li
                onClick={() => {
                  navigate("/buttons");
                }}
              >
                Components
              </li>
              <li>Blog</li>
            </ul>

            <button
              onClick={() => {
                navigate("/buttons");
              }}
            >
              Get Started
            </button>
            {!showMenu ? (
              <HiMenu
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                className="menu"
              />
            ) : (
              <HiMenuAlt3
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                className="menu"
              />
            )}
            <div className="line"></div>
            <AiFillGithub className="icons" />
            {!toggleTheme ? (
              <div className="icons">
                <MdLightMode
                  className="icons"
                  onClick={() => {
                    setToggleTheme(!toggleTheme);
                  }}
                />
              </div>
            ) : (
              <div className="icons">
                <MdDarkMode
                  className="icons"
                  onClick={() => {
                    setToggleTheme(!toggleTheme);
                  }}
                />
              </div>
            )}
          </div>
        </$Container>
      </$OverallContainer>
    </>
  );
}

export default NavSection;
const $OverallContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  font-family: "Outfit", sans-serif;
  z-index: 30;
  background-color: ${(props) => props.color};
`;

const $Container = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 8px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  overflow: hidden;
  width: 100%;
  max-width: 1440px;
  height: 70px;
  color: ${(props) => props.color};

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  .nav_links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 200px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
      display: flex;
      width: 600px;
    }
  }
  ul {
    width: 250px;
    list-style-type: none;

    align-items: center;
    justify-content: space-between;
    display: none;
    @media (min-width: 768px) {
      display: flex;
      width: 250px;
    }
  }
  li {
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #4361ee;
    }
  }
  button {
    color: ${theme.home_text};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    cursor: pointer;
    background-color: #4361ee;
    border-radius: 4px;
    border: none;
    margin-left: 50px;
    transition: all 0.2s ease-in;
    font-weight: medium;
    font-size: 16px;
    display: none;
    &:hover {
      cursor: pointer;
      background-color: #223bac;
    }
    @media (min-width: 768px) {
      display: block;
    }
  }
  .line {
    height: 50px;
    width: 1px;
    background-color: gray;
    margin: 0px 13px 0px 13px;
    @media (min-width: 768px) {
      margin: 0px 20px 0px 40px;
    }
  }

  .icons {
    height: 30px;
    width: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
  .menu {
    height: 30px;
    width: 30px;

    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const $LogoContainer = styled.h1`
  color: ${(props) => props.color};
  font-size: 1.9rem;
  font-weight: 900;
  font-family: "Kanit", sans-serif;

  span {
    color: #223bac;
    font-size: 2rem;
    font-family: "Kanit", sans-serif;
  }
`;

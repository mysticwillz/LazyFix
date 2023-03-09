import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Theme";
interface ModeProps {
  toggleTheme: boolean;
}
function NavModal({ toggleTheme }: ModeProps) {
  const navigate = useNavigate();
  return (
    <>
      <Container color={toggleTheme ? theme.home_bg : theme.home_text}>
        <List color={toggleTheme ? theme.home_text : theme.home_bg}>
          <li
            onClick={() => {
              navigate("/get-started");
            }}
          >
            Docs
          </li>
          <li
            onClick={() => {
              navigate("/buttons");
            }}
          >
            Components
          </li>
          <li
            onClick={() => {
              navigate("/contributions");
            }}
          >
            How to Contribute
          </li>
        </List>
        <button
          onClick={() => {
            navigate("/buttons");
          }}
        >
          Get Started
        </button>
      </Container>
    </>
  );
}

export default NavModal;
const Container = styled.section`
  position: fixed;
  right: 50px;
  top: 70px;
  z-index: 40;
  width: 200px;
  height: 220px;
  border-radius: 15px;
  background: ${(props) => props.color};
  @media (min-width: 350px) {
    right: 100px;
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
    margin: 0 auto;
    transition: all 0.2s ease-in;
    font-weight: medium;
    font-size: 16px;
    margin-top: 10px;

    &:hover {
      cursor: pointer;
      background-color: #223bac;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  color: ${(props) => props.color};
  padding: 10px 0 20px;

  border-bottom: 1px dotted gray;

  li {
    padding: 5px;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    font-weight: medium;
    padding-left: 20px;

    &:hover {
      cursor: pointer;
      color: #4361ee;
    }
  }
`;

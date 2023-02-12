import React, { useState } from "react";
import styled from "styled-components";

function Sidebar() {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <ContainerWrapper>
        <Container>
          <input
            type="text"
            value={searchInput}
            name="searchInput"
            placeholder="search for components"
          />
          <h2>Documentation</h2>
          <GetStarted>
            <li>Get started</li>
            <li>How to use</li>
          </GetStarted>
          <h2>Components</h2>
          <Components>
            <li>Buttons</li>
            <li>Sliders</li>
            <li>Navigation Bars</li>
            <li>Loaders</li>
            <li>Sidebar</li>
            <li>How to use</li>
            <li>Get started</li>
            <li>How to use</li>
            <li>Get started</li>
            <li>How to use</li>
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
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  border-right: 1px solid gray;
  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    color: #4361ee;
    margin: 10px 0;
  }

  /* ::-webkit-scrollbar {
    width: 10px;
  }
 Track 
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle 
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover 
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  } */
`;

const Container = styled.div`
  width: 80%;

  display: flex;

  flex-direction: column;

  input {
    width: 100%;
    height: 40px;
    outline: none;
    border: gray;
    border-radius: 4px;
    font-size: 18px;
    line-height: 24px;
    font-weight: medium;
    padding: 0 10px;
    margin: 40px auto 30px;
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

  color: white;

  li {
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    cursor: pointer;
    list-style-type: none;
    padding: 7px 20px;
    border-left: 1px solid gray;
    transition: all 0.3s ease;
    &:hover {
      border-left: 1px solid #4361ee;
      color: #4361ee;
    }
  }
`;

const Components = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;

  li {
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    cursor: pointer;
    list-style-type: none;
    padding: 7px 20px;
    border-left: 1px solid gray;
    transition: all 0.3s ease;
    &:hover {
      border-left: 1px solid #4361ee;
      color: #4361ee;
    }
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

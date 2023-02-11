import React, { useState } from "react";
import styled from "styled-components";

function Sidebar() {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
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
    </>
  );
}

export default Sidebar;

const Container = styled.section`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 1px solid gray;

  input {
    width: 90%;
    height: 40px;
    outline: none;
    border: gray;
    border-radius: 4px;
    font-size: 18px;
    line-height: 24px;
    font-weight: medium;
    padding: 0 10px;
    margin-top: 20px;
  }
  h2 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    color: #4361ee;
  }
`;

const GetStarted = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: disc;
  color: white;
  padding-left: 60px;
  li {
    font-size: 18px;
    line-height: 26px;
    font-weight: normal;
    cursor: pointer;
    list-style-type: disc;
    margin: 7px 0;
  }
`;

const Components = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: disc;
  color: white;
  padding-left: 60px;
  li {
    font-size: 18px;
    line-height: 26px;
    font-weight: normal;
    cursor: pointer;
    list-style-type: none;
    margin: 7px 0;
  }
`;

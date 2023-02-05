import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <$Container>
      <$Wrapper>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </$Wrapper>
    </$Container>
  );
}

export default Footer;

const $Container = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
`;
const $Wrapper = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  div {
    width: 100px;
    height: 50px;
    border: 1px solid blue;
    background-color: #fff;
    cursor: pointer;
  }
`;

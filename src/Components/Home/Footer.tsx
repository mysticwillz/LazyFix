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
      </$Wrapper>
    </$Container>
  );
}

export default Footer;

const $Container = styled.main`
  display: flex;

  align-items: center;
  justify-content: start;
  margin-top: 10px;
`;
const $Wrapper = styled.section`
  display: flex;
  width: 80%;
  align-items: center;

  div {
    width: 100px;
    height: 50px;
    border: 1px solid blue;
    background-color: #fff;
    cursor: pointer;
    margin: 0 5px;
  }
`;

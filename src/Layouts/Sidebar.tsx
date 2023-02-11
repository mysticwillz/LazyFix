import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <>
      <Container></Container>
    </>
  );
}

export default Sidebar;

const Container = styled.section`
  width: 300px;
  height: 100vh;

  border-right: 1px solid gray;
`;

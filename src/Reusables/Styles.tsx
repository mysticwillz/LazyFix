import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  top: 70px;

  background-color: ${(props) => props.color};
  @media (min-width: 768px) {
    width: 80%;
  }
`;

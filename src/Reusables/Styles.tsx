import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  right: 0;

  top: 70px;
  overflow-x: hidden;

  background-color: ${(props) => props.color};
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const Heading = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0 15px;
  color: ${(props) => props.color};
  @media (min-width: 768px) {
    margin: 20px 0 30px;
  }
`;
export const ComponentWrapper = styled.div`
  width: 90%;

  border-radius: 20px;

  margin: 0 auto 10px;

  h5 {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 1px;
    color: #4361ee;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    height: 450px;
    margin: 0 auto 100px;
  }
`;
export const Title = styled.h4`
  font-size: 26px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${(props) => props.color};
  padding: 6px 0;
  @media (min-width: 768px) {
    padding: 10px 0;
  }
`;

export const Components = styled.div`
  background-color: white;
  width: 100%;
  height: 250px;

  border: 1px solid #023047;
  border-radius: 20px;

  @media (min-width: 768px) {
    height: 450px;
  }
`;

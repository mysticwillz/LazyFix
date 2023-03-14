import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
type ModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Modal({ setOpenModal }: ModalProps) {
  return createPortal(
    <ModalContainer>
      <CodeContainerWrapper>
        <div className="close-div">
          <GrClose
            className="close"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>
        <CodeContainer>
          <div className="first-div"></div>
          <div></div>
        </CodeContainer>
      </CodeContainerWrapper>
    </ModalContainer>,
    document.getElementById("modal") as HTMLElement
  );
}

const ModalContainer = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;

  transform: translate(-50%, -50%);
  background: rgba(106, 105, 105, 0.1);
  z-index: 40;
`;
const CodeContainerWrapper = styled.section`
  width: 90%;
  height: 90%;
  position: fixed;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  padding: 10px;

  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 50;
  border-radius: 10px;

  .close-div {
    display: flex;
    justify-content: end;
    width: 100%;
  }
  .close {
    cursor: pointer;
    font-size: 1.7rem;
    padding-right: 10px;
  }
`;

const CodeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    width: 50%;
    height: 90%;

    padding: 0 10px;
  }
  .first-div {
    border-right: 1px solid gray;
  }
`;

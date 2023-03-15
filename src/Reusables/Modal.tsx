import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import CopyCode from "./CopyCode";
type ModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  sendCode: {
    html: string;
    css: string;
  };
};
export default function Modal({ setOpenModal, sendCode }: ModalProps) {
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
          <div className="first-div">
            <h2>HTML</h2>
            <CopyCode>{sendCode.html}</CopyCode>
          </div>
          <div>
            <h2>CSS</h2>
            <CopyCode>{sendCode.css}</CopyCode>
          </div>
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
  background: rgba(106, 105, 105, 0.4);
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
  position: relative;
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

    h2 {
      padding-left: 15px;
      position: absolute;
      top: 2rem;
    }
  }
  .first-div {
    border-right: 1px solid gray;
  }
`;

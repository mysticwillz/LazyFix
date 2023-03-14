import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

type ModalProps = {
  setOpenModal: boolean;
};
export default function Modal({ setOpenModal }: ModalProps) {
  return createPortal(
    <ModalContainer>
      <h1>Am a modal hidden n the land</h1>{" "}
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

import styled from "styled-components";
import { useState } from "react";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";
import { ButtonData } from "./ButtonData";
import Modal from "../../Reusables/Modal";

interface toggleProps {
  toggleTheme: boolean;
}
function Button({ toggleTheme }: toggleProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [sendCode, setSendCode] = useState({
    html: "",
    css: "",
  });
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Button Components
      </Heading>
      <>
        {ButtonData.length > 0 &&
          ButtonData?.map((buttons, index) => {
            const { title, button, html, css } = buttons;

            const getIndex = (i: number) => {
              if (i === index) {
                setSendCode({
                  html,
                  css,
                });
              }
            };
            return (
              <ComponentWrapper
                key={title}
                color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
              >
                <Title
                  color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}
                >
                  {title}
                </Title>
                <h5
                  onClick={() => {
                    setOpenModal(true);
                    getIndex(index);
                  }}
                >
                  View HTML & CSS source code
                </h5>
                {openModal && (
                  <Modal setOpenModal={setOpenModal} sendCode={sendCode} />
                )}
                <Components>{button}</Components>
              </ComponentWrapper>
            );
          })}
      </>
    </Container>
  );
}

export default Button;

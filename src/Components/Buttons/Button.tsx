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
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Button Components
      </Heading>
      <>
        {ButtonData.length > 0 &&
          ButtonData?.map((buttons) => {
            const { title, button } = buttons;

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
                  }}
                >
                  View HTML & CSS source code
                </h5>
                {openModal && <Modal setOpenModal={setOpenModal} />}
                <Components>{button}</Components>
              </ComponentWrapper>
            );
          })}
      </>
    </Container>
  );
}

export default Button;

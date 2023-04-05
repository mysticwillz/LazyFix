import styled from "styled-components";
import {
  Container,
  Heading,
  ComponentWrapper,
  Title,
  Components,
} from "../../Reusables/Styles";
import { theme } from "../../Theme";

import { PaginateData } from "./PaginateData";
import { useState } from "react";
import Modal from "../../Reusables/Modal";

interface toggleProps {
  toggleTheme: boolean;
}
function Pagination({ toggleTheme }: toggleProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [sendCode, setSendCode] = useState({
    html: "",
    css: "",
  });
  return (
    <Container color={toggleTheme ? theme.home_text : theme.home_bg}>
      <Heading color={toggleTheme ? theme.home_bg : theme.app_text_dark_big}>
        {" "}
        Pagination Components
      </Heading>
      <>
        {PaginateData.length > 0 &&
          PaginateData?.map((paginates, index) => {
            const { title, pagination, html, css } = paginates;
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
                <Components>{pagination}</Components>
              </ComponentWrapper>
            );
          })}
      </>
    </Container>
  );
}

export default Pagination;

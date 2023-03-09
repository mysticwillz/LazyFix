import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegCopy } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
interface CodeType {
  children: string;
}
export default function CopyCode({ children }: CodeType) {
  const [copySuccess, setCopySuccess] = useState(false);

  function copyToClipboard() {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        setCopySuccess(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }

  useEffect(() => {
    const clearText = setTimeout(() => {
      setCopySuccess(false);
    }, 500);
    return () => {
      clearTimeout(clearText);
    };
  }, [copySuccess]);

  return (
    <>
      <MainContainer>
        <div
          onClick={() => {
            copyToClipboard();
          }}
        >
          <p className="copy-text">{copySuccess ? "Copied" : "Copy code"}</p>
          {!copySuccess ? (
            <FaRegCopy className="copy-icon" />
          ) : (
            <GiCheckMark className="copy-icon" />
          )}
        </div>
      </MainContainer>
      <Container>{children}</Container>;
    </>
  );
}

const MainContainer = styled.section`
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  display: flex;
  justify-content: end;

  align-items: center;
  border-bottom: 1px solid gray;
  background-color: #04223bb7;
  color: #dbdde0;
  border-radius: 15px 15px 0 0;

  .copy-icon {
    font-size: 24px;
    font-weight: bold;
    margin-left: 5px;
  }
  .copy-text {
    font-size: 18px;
    word-wrap: normal;
  }
  div {
    width: auto;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    align-items: center;
  }
`;
const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 30px 20px;
  background-color: #102537;
  color: #dbdde0;
  border-radius: 0 0 15px 15px;
`;

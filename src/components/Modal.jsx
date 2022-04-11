import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

const modalRoot = document.querySelector("#modal-root");

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ImageWrapper = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const Modal = ({ modalImg, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <ImageWrapper>
        <img src={modalImg} alt={"qwe"} />
      </ImageWrapper>
    </BackDrop>,
    modalRoot
  );
};

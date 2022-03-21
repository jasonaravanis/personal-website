import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { IProject } from "../interfaces/Project";

interface Props {
  content: IProject | null;
  setContent: (content: IProject | null) => void;
}

const ContentContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px;
  z-index: 10000;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
`;

const Modal: FC<Props> = ({ content, setContent }) => {
  // overflow styles applied to body to prevent scrolling of main content while modal is open.
  if (!content) {
    document.body.style.overflow = "auto";
    return null;
  }

  const closeModal = () => {
    setContent(null);
  };

  document.body.style.overflow = "hidden";
  return createPortal(
    <Backdrop onClick={closeModal}>
      <ContentContainer>
        <img src={content.image} alt={content.title} />
        <span>{content.title}</span>
        <button onClick={closeModal}>Close Modal</button>
      </ContentContainer>
    </Backdrop>,
    document.getElementById("modalPortal")!
  );
};

export default Modal;

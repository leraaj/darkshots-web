import React, { useEffect, useState } from "react";
import "./style.css";
import Modal from "./Modal";
import ModalBackdrop from "./ModalBackdrop";
import ModalContainer from "./ModalContainer";
import ModalHeader from "./ModalHeader";
const CustomModal = ({
  show,
  onHide,
  isStatic,
  size,
  children,
  title,
  onSubmit,
}) => {
  const display = show ? "fade show visible" : "fade invisible";
  const [staticPulse, setStaticPulse] = useState(false);

  return (
    <>
      <ModalContainer display={display}>
        <ModalBackdrop
          display={display}
          isStatic={isStatic}
          setShouldPulse={setStaticPulse}
          onHide={onHide}
        />
        <Modal
          display={display}
          isStatic={isStatic}
          shouldPulse={staticPulse}
          setShouldPulse={setStaticPulse}
          size={size}
          onSubmit={onSubmit}>
          <ModalHeader
            title={title ? title : "Custom modal title"}
            onHide={onHide}
          />
          {children}
        </Modal>
      </ModalContainer>
    </>
  );
};

export default CustomModal;

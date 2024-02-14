import React from "react";

const ModalContainer = ({ children, display }) => {
  return (
    <div className={`${display} custom-modal-container `} data-bs-theme="dark">
      {children}
    </div>
  );
};

export default ModalContainer;

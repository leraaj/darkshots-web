import React from "react";

const ModalBody = ({ children, className }) => {
  return (
    <div className={`custom-modal-body ${className && className}`}>
      {children}
    </div>
  );
};

export default ModalBody;

import React from "react";

const ModalBody = ({ children, classes, onSubmit }) => {
  return (
    <div className={`custom-modal-body row mx-0 ${classes && classes}`}>
      {children}
    </div>
  );
};

export default ModalBody;

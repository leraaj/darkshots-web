import React from "react";
import SimpleButton from "../buttons/SimpleButton";

const ModalFooter = ({ children }) => {
  return (
    <div className="custom-modal-footer border-top d-flex flex-row-reverse">
      {children}
    </div>
  );
};

export default ModalFooter;

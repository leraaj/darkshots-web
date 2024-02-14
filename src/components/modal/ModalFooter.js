import React from "react";
import SimpleButton from "../buttons/SimpleButton";

const ModalFooter = ({ children, onHide }) => {
  return (
    <div className="custom-modal-footer border-top">
      {onHide && (
        <SimpleButton
          size={""}
          color={"outline-light"}
          label={"Close"}
          onClick={onHide}
        />
      )}
      {children}
    </div>
  );
};

export default ModalFooter;

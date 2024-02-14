import React from "react";

const ModalHeader = ({ title, onHide }) => {
  return (
    <div className="custom-modal-header border-bottom d-flex p-3">
      <div className="col px-2">{title}</div>
      <span className="col-auto btn-close pe-auto " onClick={onHide}></span>
    </div>
  );
};

export default ModalHeader;

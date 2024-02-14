import React, { useEffect, useState } from "react";

const Modal = ({
  children,
  display,
  isStatic,
  shouldPulse,
  setShouldPulse,
  size,
}) => {
  const staticValue = isStatic == undefined ? true : !isStatic;

  const modalSize = size == undefined ? "md" : size;
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        if (!staticValue) {
          setShouldPulse(true);
          // Reset shouldPulse after a short delay
          setTimeout(() => {
            setShouldPulse(false);
          }, 300);
        }
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [staticValue]);
  return (
    <div
      className={`${display} custom-modal modal-${modalSize} ${
        modalSize !== "fullscreen" && "mt-4"
      }  d-flex flex-column ${shouldPulse ? "pulse-once" : ""}`}>
      {children}
    </div>
  );
};

export default Modal;

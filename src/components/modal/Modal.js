import React, { useEffect } from "react";

const Modal = ({
  children,
  display,
  isStatic,
  shouldPulse,
  setShouldPulse,
  size,
  onSubmit,
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
    <form
      className={`${display} custom-modal ${
        onSubmit && "needs-validation mx-0 p-0"
      }  modal-${modalSize} ${
        modalSize !== "fullscreen" && "mt-4"
      }  d-flex flex-column ${shouldPulse ? "pulse-once" : ""}`}
      {...(onSubmit && { onSubmit: onSubmit, noValidate: true })}>
      {children}
    </form>
  );
};

export default Modal;

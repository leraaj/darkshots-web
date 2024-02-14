import React, { useEffect, useState } from "react";

const ModalBackdrop = ({ display, isStatic, onHide, setShouldPulse }) => {
  const staticValue = isStatic == undefined ? true : !isStatic;
  const pulseAnimate = () => {
    setShouldPulse(true);
    // Reset shouldPulse after a short delay
    setTimeout(() => {
      setShouldPulse(false);
    }, 300); // Adjust the delay as needed
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        if (staticValue) {
          onHide();
        }
        console.log(staticValue, isStatic);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isStatic]);

  return (
    <div
      className={` ${display ? display : ""} custom-modal-backdrop`}
      {...(staticValue
        ? {
            onClick: onHide,
          }
        : { onClick: pulseAnimate })}
    />
  );
};

export default ModalBackdrop;

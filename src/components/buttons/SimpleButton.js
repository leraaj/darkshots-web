import React from "react";

const SimpleButton = ({
  className,
  value,
  color,
  label,
  icon,
  onClick,
  type,
  size,
  disabled,
}) => {
  const hasClasses = className != null;
  const hasIcons = icon != null;
  const hasOnclick = onClick != null;
  const hasSize = size != null;
  const hasColor = color != null;
  const hasType = type != null;
  // const hasToggle = bsToggle != null;
  // const hasDismiss = bsDismiss != null;
  // const hasTarget = bsTarget != null;
  const hasValue = value != null;
  return (
    <button
      className={`btn ${hasSize ? `btn-` + size : "btn-sm"}  ${
        hasColor && `btn-` + color
      } d-flex align-items-center text-center gap-1  
      ${hasClasses && className} `}
      {...(hasValue != null && { value: value })}
      {...(hasOnclick && {
        onClick: onClick,
      })}
      {...(hasType != null && { type: type })}
      {...(disabled === true ? { disabled: true } : {})}>
      {/* End tag */}
      {label != null ? (
        <span className="text-center external-theme-font">{label}</span>
      ) : null}
      {hasIcons ? icon : null}
    </button>
  );
};

export default SimpleButton;

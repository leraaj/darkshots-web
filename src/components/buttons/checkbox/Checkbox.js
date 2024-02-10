import React from "react";
import "../checkbox/style.css";
const Checkbox = ({ value }) => {
  return (
    <label class="checkbox-label">
      <input type="checkbox" class="checkbox-input" />
      <span class="checkbox-span">{value}</span>
    </label>
  );
};

export default Checkbox;

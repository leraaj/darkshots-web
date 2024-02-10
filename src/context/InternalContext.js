import React from "react";
import { createContext, useState } from "react";

export const InternalContext = createContext();

export const InternalContextProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const sidebarToggler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <InternalContext.Provider value={{ isToggled, sidebarToggler }}>
      {children}
    </InternalContext.Provider>
  );
};

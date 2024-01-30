import { InternalContext } from "../context/InternalContext";
import { useContext } from "react";

export const useInternalContext = () => {
  const context = useContext(InternalContext);

  if (!context) {
    throw Error(
      "InternalContext must be used inside an InternalContextProvider"
    );
  }
  return context;
};

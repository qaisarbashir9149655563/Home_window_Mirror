import { createContext, useContext } from "react";

const RegisterContext = createContext(undefined);

export const useRegContext = () => {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedImage must be used within a SelectedImageProvider"
    );
  }
  return context;
};

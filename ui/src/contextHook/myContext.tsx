import React, { useState, useContext } from "react";

interface MyContextPropsType {
  children: React.ReactNode;
}

interface MyContextProps {
  loginVisible: boolean | undefined;
  setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = React.createContext<MyContextProps | undefined>(
  undefined
);

export const LoginVisibleProvider: React.FC<MyContextPropsType> = ({
  children,
}) => {
  const [loginVisible, setLoginVisible] = useState(false);
  return (
    <MyContext.Provider value={{ loginVisible, setLoginVisible }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedImage must be used within a SelectedImageProvider"
    );
  }
  return context;
};

import React, { useState, useContext } from "react";

interface MyContextPropsType {
  children: React.ReactNode;
}
interface useStateProps {
  image: string;
  title: string;
  alt: string;
}
interface MyContextProps {
  selectedImage: useStateProps | undefined;
  setSelectedImage: React.Dispatch<React.SetStateAction<useStateProps>>;
}

export const MyContext = React.createContext<MyContextProps | undefined>(
  undefined
);

export const SelectedImageProvider: React.FC<MyContextPropsType> = ({
  children,
}) => {
  const [selectedImage, setSelectedImage] = useState({
    image: "",
    title: "",
    alt: "",
  });

  return (
    <MyContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </MyContext.Provider>
  );
};

export const useSelectedImage = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedImage must be used within a SelectedImageProvider"
    );
  }
  return context;
};

import React, { useContext } from "react";
import { MyContext } from "../../contextHook/myContext";
const Abc = () => {
  const context = useContext(MyContext);
  console.log(context, "context");
  return <div></div>;
};

export default Abc;

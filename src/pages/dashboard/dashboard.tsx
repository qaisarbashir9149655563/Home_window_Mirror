import React from "react";
import { useNavigate } from "react-router-dom";
import Carousal from "./carousal";
import Abc from "./abc";
import Chatbot from "../chatBot/ChatBot";
import ShowProducts from "./showProducts";
import "./AllSections";
import AllSections from "./AllSections";
interface InputData {
  input1?: string;
}
interface DashboardProps {
  selectedImage?: string;
}

const Dashboard = ({ selectedImage }: DashboardProps) => {
  const navigate = useNavigate();
  return (
    // <div>
    //   <h1>Welcome {inputsData?.input1}</h1>
    //   {!inputsData?.input1 && (
    //     <button onClick={() => navigate("fullname")}>Next</button>
    //   )}
    //   <Carousal />
    //   <Abc />
    //   {/* <div>
    //     <Chatbot />
    //   </div> */}
    //   <div className="show-products">
    //     {productsList &&
    //       productsList.map((item) => (
    //         <ShowProducts
    //           image={item.image}
    //           title={item.Title}
    //           alt={item.alt}
    //           description={item.Description}
    //         />
    //       ))}
    //   </div>
    // </div>
    <div>
      <AllSections />
    </div>
  );
};

export default Dashboard;

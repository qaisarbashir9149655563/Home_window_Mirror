import { FullName } from "./pages/fullName/fullName";
import Dashboard from "./pages/dashboard/dashboard";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { SelectedImageProvider } from "./utilities/myContext";
import About from "./pages/About/about";
const App = () => {
  // const [step, setStep] = useState(1);
  // let component;
  // const handleNext = () => {
  //   step !== 5 ? setStep((prev) => prev + 1) : setStep(4);
  // };
  // const handleBack = () => {
  //   setStep((prev) => prev - 1);
  // };

  // const [inputsData, setInputsData] = useState({});

  // const handleInputChange = (inputId: string, value: string) => {
  //   // Update the state with the new value for the specific inputId
  //   setInputsData((prevState) => ({
  //     ...prevState,
  //     [inputId]: value,
  //   }));
  // };

  // switch (step) {
  //   case 1:
  //     component = (
  //       <FullName
  //         inputId="input1"
  //         fullName="Welcom To our Platform!"
  //         step={step}
  //         placeholder="Please Add Your Full Name"
  //         onChanged={handleInputChange}
  //         handleNext={handleNext}
  //         handleBack={handleBack}
  //       />
  //     );
  //     break;
  //   case 2:
  //     component = (
  //       <FullName
  //         inputId="input2"
  //         fullName="Please write your PhoneNumber ..."
  //         step={step}
  //         placeholder="Please Add Your PhoneNumber"
  //         onChanged={handleInputChange}
  //         handleNext={handleNext}
  //         handleBack={handleBack}
  //       />
  //     );
  //     break;
  //   case 3:
  //     component = (
  //       <FullName
  //         inputId="input3"
  //         fullName="Please Add your Email ..."
  //         step={step}
  //         placeholder="Please Add Your Email"
  //         onChanged={handleInputChange}
  //         handleNext={handleNext}
  //         handleBack={handleBack}
  //       />
  //     );
  //     break;
  //   case 4:
  //     component = (
  //       <FullName
  //         inputId="input4"
  //         fullName="Please Add your Address ..."
  //         step={step}
  //         placeholder="Please Add Your Address"
  //         onChanged={handleInputChange}
  //         handleNext={handleNext}
  //         handleBack={handleBack}
  //       />
  //     );
  //     break;
  //   default:
  //     break;
  // }
  // console.log(inputsData, "inputsData");
  return (
    <SelectedImageProvider>
      <Dashboard />
    </SelectedImageProvider>
  );
};

export default App;

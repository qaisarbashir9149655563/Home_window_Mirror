import React from "react";
import ChatBot from "react-simple-chatbot";

const Chatbot = () => {
  const steps = [
    {
      id: "hello-world",
      message: "Hello World!",
      end: true,
    },
    // Define more steps here
  ];

  return (
    <div className="chatbot-container">
      <ChatBot steps={steps} />
    </div>
  );
};

export default Chatbot;

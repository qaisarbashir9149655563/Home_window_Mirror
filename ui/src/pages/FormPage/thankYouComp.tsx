import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your information has been submitted successfully.</p>
      <Link to="/userFrom">
        <Button type="primary">Go Back</Button>
      </Link>
    </div>
  );
};

export default ThankYou;

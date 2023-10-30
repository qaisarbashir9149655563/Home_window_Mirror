import React from "react";
import { Link } from "react-router-dom";
import "./bookAnAppointment.scss";
import { Button } from "antd";

const BookAnAppButton = () => {
  return (
    <div>
      <Link to="/userFrom">
        <Button className="custom-blue-button">Book an appointment</Button>
      </Link>
    </div>
  );
};

export default BookAnAppButton;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const BookAnAppButton = () => {
  return (
    <div>
      <Link to="/userFrom">
        <Button type="primary">Book an appointment</Button>
      </Link>
    </div>
  );
};

export default BookAnAppButton;

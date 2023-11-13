import React from "react";
import { Card, Col } from "antd";
import "./showProducts.css";
import { Link } from "react-router-dom";
import BookAnAppButton from "../../utils/bookAnAppointment";
interface ShowProductsProps {
  key: number;
  image: string;
  title: string;
  description: string;
  alt: string;
}
const ShowProducts: React.FC<ShowProductsProps> = ({
  key,
  image,
  title,
  description,
  alt,
}) => {
  return (
    <Col key={key} xs={24} sm={12} md={12} lg={8}>
      <Card
        hoverable
        style={{ width: 240, marginBottom: "20px" }}
        cover={<img alt={alt} src={image} />}
      >
        <BookAnAppButton />
      </Card>
    </Col>
  );
};

export default ShowProducts;

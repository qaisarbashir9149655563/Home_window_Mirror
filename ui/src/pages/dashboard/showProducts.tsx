import React, { useState } from "react";
import { Card, Col } from "antd";
import "./showProducts.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../contextHook/myContext";
import SingleProduct from "../Product/product";
import { useSelectedImage } from "../../contextHook/myContext";
import BookAnAppButton from "../../utils/bookAnAppointment";
const { Meta } = Card;
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
  const { selectedImage, setSelectedImage } = useSelectedImage();
  return (
    <Col key={key} xs={24} sm={12} md={12} lg={8}>
      <Link to="/product">
        <Card
          hoverable
          style={{ width: 240, marginBottom: "20px" }}
          cover={<img alt={alt} src={image} />}
          onClick={() =>
            setSelectedImage({ image: image, title: title, alt: alt })
          }
        >
          {/* <Meta title={title} description={description} /> */}
          <BookAnAppButton />
        </Card>
      </Link>
    </Col>
  );
};

export default ShowProducts;

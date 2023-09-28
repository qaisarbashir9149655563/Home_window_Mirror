import React, { useState } from "react";
import { Card, Col } from "antd";
import "./showProducts.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../utilities/myContext";
import SingleProduct from "../Product/product";
import { useSelectedImage } from "../../utilities/myContext";
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
    <Col span={8}>
      <Link to="/product">
        <Card
          hoverable
          style={{ width: 240, marginBottom: "20px" }}
          cover={<img alt={alt} src={image} />}
          onClick={() =>
            setSelectedImage({ image: image, title: title, alt: alt })
          }
        >
          <Meta title={title} description={description} />
        </Card>
      </Link>
    </Col>
  );
};

export default ShowProducts;

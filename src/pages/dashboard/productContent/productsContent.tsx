import React from "react";
import { Breadcrumb, Layout, Menu, theme, Row } from "antd";
import ShowProducts from "../showProducts";

interface ProductsContentProps {
  productsList: any;
}
const ProductsContent: React.FC<ProductsContentProps> = ({ productsList }) => {
  return (
    <div className="show-products">
      <Row>
        {productsList &&
          productsList.map((item: any) => (
            <ShowProducts
              key={item.key}
              image={item.image}
              title={item.Title}
              alt={item.alt}
              description={item.Description}
            />
          ))}
      </Row>
    </div>
  );
};

export default ProductsContent;

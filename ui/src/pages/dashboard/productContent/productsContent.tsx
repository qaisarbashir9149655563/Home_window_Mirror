import React from "react";
import { Row } from "antd";
import ShowProducts from "../showProducts";

interface ProductsContentProps {
  productsList: any;
}

const ProductsContent: React.FC<ProductsContentProps> = ({ productsList }) => {
  return (
    <div className="show-products">
      <Row gutter={[16, 16]}>
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

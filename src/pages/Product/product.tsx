import React, { useContext } from "react";
import { MyContext } from "../../utilities/myContext";
import { Card, Typography, Layout } from "antd";
const { Header, Content, Sider, Footer } = Layout;
const SingleProduct = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    // Handle the case where the context is undefined
    return <div>Context is undefined</div>;
  }
  const { selectedImage } = context;
  console.log(selectedImage);
  return (
    <div>
      <Layout>
        <Card>
          <Card
            hoverable
            style={{ width: 400, marginBottom: "20px" }}
            cover={<img alt={selectedImage?.alt} src={selectedImage?.image} />}
          ></Card>
        </Card>
        <Sider style={{ width: "1000px", marginLeft: "200px" }}>
          <Typography.Title level={1} style={{ margin: 0, color: "white" }}>
            Tribal CulT
          </Typography.Title>
        </Sider>
      </Layout>
    </div>
  );
};

export default SingleProduct;

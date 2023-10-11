import React, { useContext } from "react";
import { MyContext } from "../../contextHook/myContext";
import { Card, Typography, Layout } from "antd";
const { Sider } = Layout;
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
        <Card
          hoverable
          style={{ width: 400, marginBottom: "20px" }}
          cover={<img alt={selectedImage?.alt} src={selectedImage?.image} />}
        ></Card>
        <Sider style={{ width: 800, backgroundColor: "white" }}>
          <Typography.Title
            level={1}
            style={{ margin: 0, color: "black", width: 800 }}
          >
            Tribal CulTjkhkjkjoijojijojojiojojoijiojioji
          </Typography.Title>
        </Sider>
      </Layout>
    </div>
  );
};

export default SingleProduct;

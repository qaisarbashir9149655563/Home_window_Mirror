import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { ProductsList } from "../../contextHook/constant";
import { useParams } from "react-router-dom";
import "./allSections.css";
import ProductsContent from "./productContent/productsContent";
import { Routes, Route } from "react-router-dom";
import About from "../about/about";
import SingleProduct from "../Product/product";
import Carousal from "./carousal";
import { HeaderSec } from "./header/headerSection";
import { UserForm } from "../FormPage/userForm";
import ShowUsersDataToAdmin from "../admin/showUsersData";
import ThankYou from "../FormPage/thankYouComp";
const { Content, Footer } = Layout;

const Dashboard: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { param } = useParams();
  console.log(param, "param");
  return (
    <Layout>
      <HeaderSec />
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: colorBgContainer,
            }}
          >
            <Carousal />
            <Routes>
              <Route
                path="/"
                element={<ProductsContent productsList={ProductsList} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<SingleProduct />} />
              <Route path="/userFrom" element={<UserForm />} />
              <Route path="/admin" element={<ShowUsersDataToAdmin />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Luna Widow ©2023 Created by Sperical Approach
      </Footer>
    </Layout>
  );
};

export default Dashboard;

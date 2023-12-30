import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import RegisterUser from "../../Register/registerUser";
const { Header } = Layout;

export const HeaderSec = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="header-section"
    >
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Menu theme="dark">
        <Menu.Item key="login">
          <RegisterUser />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

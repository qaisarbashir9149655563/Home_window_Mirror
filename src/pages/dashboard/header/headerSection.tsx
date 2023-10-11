import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

export const HeaderSec = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Button type="default" style={{ marginTop: "10px", marginLeft: "50px" }}>
        Book an appointment
      </Button>
    </Header>
  );
};

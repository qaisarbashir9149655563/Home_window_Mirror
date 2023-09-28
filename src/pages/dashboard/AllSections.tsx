import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Row } from 'antd';
import { NavBarOptions, ProductsList } from '../../utilities/constant';
import { Link, useParams } from 'react-router-dom';
import './allSections.css';
import ProductsContent from './productContent/productsContent';
import { Routes, Route } from 'react-router-dom';
import About from '../About/about';
import SingleProduct from '../Product/product';
const { Header, Content, Sider, Footer } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const AllSections: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
const handleProductsList = () => {
    console.log("ProductsList", ProductsList);
}
  const {param} = useParams();
  console.log(param, "param");
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">
        <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
        <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="login">
        <Link to="/login">Login</Link>
        </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={()=>{handleProductsList()}}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
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
          <Routes>
          <Route
            path="/"
            element={<ProductsContent productsList={ProductsList}/>}
          />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<SingleProduct />} />
        </Routes>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Luna Widow ©2023 Created by Sperical Approach</Footer>
    </Layout>
  );
};

export default AllSections;
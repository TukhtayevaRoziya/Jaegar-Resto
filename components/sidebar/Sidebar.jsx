import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  HomeFilled,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Image from 'next/image';

import logo from '../../assets/logo.png'

import styles from './Sidebar.module.css'

const { Header, Content, Footer, Sider } = Layout;


function getItem(
  label,
  key,
  icon,
  children,
) {
  return {
    key,
    icon,
    children,
    label,
  } 
}

const items = [
  getItem('Home', '1', <HomeFilled />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Files', '9', <FileOutlined />),
];

const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={true}>
        <div className={styles.image_body}>

       <Image src={logo} alt=''/>
        </div>
        <Menu className={styles.menu} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
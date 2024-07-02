import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
// import { ProductList, ProductDetail } from './components';
import './styles/customStyles.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import BigFooter from './components/Footer';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Product List</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/">Contact</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/">About</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/">Blog</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
             
              <Route path="/about"/>
            </Routes>
          </div>
        </Content>
        <BigFooter></BigFooter>
      </Layout>
    </Router>
  );
};


export default App;

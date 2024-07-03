import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/customStyles.css';

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar
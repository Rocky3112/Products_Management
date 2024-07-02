import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;
const BigFooter: React.FC = () => {
  return (
    <Footer style={{ backgroundColor: '#c5cfd8',
     padding: '2rem 3rem' }}>
      <Row gutter={16} justify="center">
        <Col xs={24} sm={12} md={6} className='footer'>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h3>Products</h3>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h3>Resources</h3>
          <ul>
            <li>FAQs</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Col>
      </Row>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        ©2024 Your Company. All rights reserved. Contact us: contact@yourcompany.com
      </div>
    </Footer>
  );
};

export default BigFooter;

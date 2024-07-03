
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import './styles/customStyles.css';
import ProductEdit from './components/ProductEdit';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import BigFooter from './components/Footer';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="layout">
        <div>
          <Navbar></Navbar>
        </div>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/edit-product/:id" element={<ProductEdit />} />
            </Routes>
          </div>
        </Content>
        <BigFooter></BigFooter>
      </Layout>
    </Router>
  );
};


export default App;
